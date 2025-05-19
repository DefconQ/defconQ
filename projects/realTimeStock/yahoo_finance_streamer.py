#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Real-time Yahoo Finance data streamer to KDB+
- Downloads stock data at configurable intervals
- Reads stock tickers from a CSV file
- Streams data to a KDB+ ticker plant using qpython
"""

import os
import csv
import time
import datetime
import sys
import argparse
import logging
import pandas as pd
import numpy as np
import yfinance as yf
from pathlib import Path
from typing import List, Dict, Any, Optional


# Fix NumPy bool deprecation issue before importing qpython
import numpy
if not hasattr(numpy, 'bool'):
    numpy.bool = bool

# Now import qpython
from qpython import qconnection
from qpython.qtype import QException


# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class YahooFinanceStreamer:
    """
    Class to download data from Yahoo Finance and stream to KDB+ ticker plant
    """
    
    def __init__(
        self,
        tickers_file: str,
        kdb_host: str = 'localhost',
        kdb_port: int = 5010,
        table_name: str = 'stocks',
        interval: int = 30,
        retry_limit: int = 3,
        retry_delay: int = 5
    ):
        """
        Initialize the Yahoo Finance Streamer
        
        Args:
            tickers_file: Path to CSV file containing stock tickers
            kdb_host: KDB+ host address
            kdb_port: KDB+ port number
            table_name: KDB+ table name to publish data to
            interval: Update interval in seconds
            retry_limit: Maximum number of connection retries
            retry_delay: Delay between retries in seconds
        """
        self.tickers_file = tickers_file
        self.kdb_host = kdb_host
        self.kdb_port = kdb_port
        self.table_name = table_name
        self.interval = interval
        self.retry_limit = retry_limit
        self.retry_delay = retry_delay
        self.q = None
        self.symbols = self._load_tickers()
        
    def _load_tickers(self) -> List[str]:
        """
        Load stock tickers from CSV file
        
        Returns:
            List of stock ticker symbols
        """
        symbols = []
        try:
            ticker_path = Path(self.tickers_file)
            if not ticker_path.exists():
                logger.error(f"Tickers file not found: {self.tickers_file}")
                raise FileNotFoundError(f"Tickers file not found: {self.tickers_file}")
            
            # First try to read with pandas which is more robust with different CSV formats
            try:
                df = pd.read_csv(ticker_path)
                
                # Determine which column contains the ticker symbol
                ticker_col = 0  # Default to first column
                potential_names = ["ticker", "symbol", "stock", "name"]
                
                # Check if any column names match potential ticker column names
                for col in df.columns:
                    if col.lower() in potential_names:
                        ticker_col = col
                        break
                
                # If no match found, use the first column
                if ticker_col == 0 and len(df.columns) > 0:
                    ticker_col = df.columns[0]
                
                # Extract symbols from the identified column
                for ticker in df[ticker_col].dropna():
                    clean_ticker = str(ticker).strip().upper()
                    if clean_ticker:
                        symbols.append(clean_ticker)
                
            except Exception as e:
                logger.warning(f"Failed to read CSV with pandas: {e}. Trying alternate methods...")
                
                # Fallback to manual parsing with different common delimiters
                with open(ticker_path, 'r') as f:
                    content = f.read()
                
                # Try different delimiters commonly used in CSV files
                for delimiter in [',', ';', '\t', '|', ' ']:
                    try:
                        lines = content.split('\n')
                        if not lines:
                            continue
                            
                        # Check if first line might be a header
                        has_header = False
                        first_line = lines[0].split(delimiter)
                        if any(h.lower() in potential_names for h in first_line):
                            has_header = True
                            ticker_col = next((i for i, h in enumerate(first_line) if h.lower() in potential_names), 0)
                        else:
                            ticker_col = 0
                        
                        # Process all lines
                        start_line = 1 if has_header else 0
                        for line in lines[start_line:]:
                            if not line.strip():
                                continue
                                
                            parts = line.split(delimiter)
                            if len(parts) > ticker_col:
                                ticker = parts[ticker_col].strip().upper()
                                if ticker:
                                    symbols.append(ticker)
                        
                        # If we found symbols with this delimiter, break the loop
                        if symbols:
                            logger.info(f"Successfully parsed CSV using delimiter: '{delimiter}'")
                            break
                    
                    except Exception as e:
                        logger.debug(f"Failed parsing with delimiter '{delimiter}': {e}")
            
            # As last resort, try to simply read each line as a ticker
            if not symbols:
                logger.warning("Trying simple line-by-line parsing...")
                with open(ticker_path, 'r') as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.lower() in potential_names:  # Skip header-like lines
                            symbols.append(line.upper())
            
            # Remove duplicates and sort
            symbols = sorted(list(set(symbols)))
            logger.info(f"Loaded {len(symbols)} ticker symbols from {self.tickers_file}")
            
            if not symbols:
                logger.warning("No ticker symbols found in the CSV file")
                
            return symbols
            
        except Exception as e:
            logger.error(f"Error loading tickers from CSV: {e}")
            raise    
    
    def _connect_to_kdb(self) -> bool:
        """
        Establish connection to KDB+ server with retry mechanism
        
        Returns:
            True if connection successful, False otherwise
        """
        for attempt in range(1, self.retry_limit + 1):
            try:
                logger.info(f"Connecting to KDB+ at {self.kdb_host}:{self.kdb_port} (attempt {attempt}/{self.retry_limit})")
                self.q = qconnection.QConnection(host=self.kdb_host, port=self.kdb_port, pandas=True)
                self.q.open()
                logger.info(f"Successfully connected to KDB+: {self.q.protocol_version}")
                return True
                
            except Exception as e:
                logger.error(f"Failed to connect to KDB+ server: {e}")
                if attempt < self.retry_limit:
                    logger.info(f"Retrying in {self.retry_delay} seconds...")
                    time.sleep(self.retry_delay)
                else:
                    logger.error("Max retry limit reached. Could not connect to KDB+")
                    return False
        
        return False
    
    def _get_batch_data(self, symbols: List[str]) -> pd.DataFrame:
        """
        Fetch real-time data from Yahoo Finance for a batch of symbols
        
        Args:
            symbols: List of stock symbols to fetch data for
            
        Returns:
            DataFrame with the latest market data
        """
        all_data = []
        feedHandlerTime = datetime.datetime.now()
        
        try:
            # Get data for multiple tickers at once if possible
            tickers = yf.Tickers(' '.join(symbols))
            
            for symbol in symbols:
                try:
                    ticker = tickers.tickers[symbol]
                    
                    # Get the latest price info
                    history = ticker.history(period="1d")
                    info = ticker.info
                    
                    if not history.empty:
                        latest_bar = history.iloc[-1]
                        
                        data = {
                            'symbol': symbol,
                            'time': feedHandlerTime,
                            'open': float(latest_bar.get('Open', np.nan)),
                            'high': float(latest_bar.get('High', np.nan)),
                            'low': float(latest_bar.get('Low', np.nan)),
                            'close': float(latest_bar.get('Close', np.nan)),
                            'volume': int(latest_bar.get('Volume', 0)),
                            'bid': float(info.get('bid', np.nan)),
                            'ask': float(info.get('ask', np.nan)),
                            'bid_size': int(info.get('bidSize', 0)),
                            'ask_size': int(info.get('askSize', 0)),
                        }
                        
                        
                        all_data.append(data)
                    else:
                        logger.warning(f"No data available for {symbol}")
                        
                except Exception as e:
                    logger.warning(f"Error fetching data for {symbol}: {e}")
            
            return pd.DataFrame(all_data)
            
        except Exception as e:
            logger.error(f"Error in batch data retrieval: {e}")
            return pd.DataFrame()
    
    def _fetch_market_data(self) -> pd.DataFrame:
        """
        Fetch market data for all symbols in batches
        
        Returns:
            DataFrame with the latest market data for all symbols
        """
        if not self.symbols:
            logger.warning("No symbols to fetch data for")
            return pd.DataFrame()
        
        # Process in batches of 50 symbols to avoid API limitations
        batch_size = 50
        all_data = []
        
        for i in range(0, len(self.symbols), batch_size):
            batch = self.symbols[i:i+batch_size]
            logger.info(f"Fetching data for batch {i//batch_size + 1}: {len(batch)} symbols")
            
            batch_data = self._get_batch_data(batch)
            if not batch_data.empty:
                all_data.append(batch_data)
                
            # Small delay between batches to avoid rate limits
            if i + batch_size < len(self.symbols):
                time.sleep(1)
        
        if all_data:
            return pd.concat(all_data, ignore_index=True)
        else:
            return pd.DataFrame()
    
    def _stream_to_kdb(self, data: pd.DataFrame) -> bool:
        """
        Stream data to KDB+ ticker plant
        
        Args:
            data: DataFrame with market data to publish
            
        Returns:
            True if successful, False otherwise
        """
        if data.empty:
            logger.warning("No data to stream to KDB+")
            return False
        
        if not self.q or not self.q.is_connected():
            logger.error("Not connected to KDB+")
            return False
        
        try:
            # Convert timestamp to a format KDB+ can understand
            data['time'] = data['time'].apply(lambda x: x.strftime('%Y.%m.%dD%H:%M:%S.%f')[:-3])
            
            # Convert DataFrame to dictionary for qpython
            data_dict = {col: data[col].tolist() for col in data.columns}
            
            # Stream data to KDB+
            self.q.sendSync(f".u.upd", self.table_name, list(zip(*data_dict.values())))
            #self.q.sendSync(f".u.upd", self.table_name, data.values.tolist())
            
            logger.info(f"Streamed {len(data)} records to KDB+ table '{self.table_name}'")
            return True
            
        except QException as e:
            logger.error(f"KDB+ error: {e}")
            return False
        except Exception as e:
            logger.error(f"Error streaming to KDB+: {e}")
            return False
    
    def start_streaming(self, max_iterations: Optional[int] = None) -> None:
        """
        Main execution loop - fetch data and stream to KDB+ at regular intervals
        
        Args:
            max_iterations: Optional maximum number of iterations (for testing)
        """
        if not self.symbols:
            logger.error("No ticker symbols loaded. Cannot start streaming")
            return
        
        if not self._connect_to_kdb():
            logger.error("Failed to connect to KDB+. Cannot start streaming")
            return
        
        iteration = 0
        next_run_time = time.time()
        
        try:
            logger.info(f"Starting data streaming for {len(self.symbols)} symbols at {self.interval}s intervals")
            
            while True:
                current_time = time.time()
                
                # Check if it's time to run the next iteration
                if current_time >= next_run_time:
                    if max_iterations and iteration >= max_iterations:
                        logger.info(f"Reached maximum iterations ({max_iterations}). Stopping.")
                        break
                    
                    # Fetch data from Yahoo Finance
                    data = self._fetch_market_data()
                    
                    # Stream data to KDB+
                    if not data.empty:
                        self._stream_to_kdb(data)
                    
                    # Calculate next run time
                    iteration += 1
                    next_run_time = current_time + self.interval
                    
                    # Log info about next run
                    next_run_time_str = datetime.datetime.fromtimestamp(next_run_time).strftime('%H:%M:%S')
                    logger.info(f"Completed iteration {iteration}. Next run at {next_run_time_str}")
                
                # Sleep for a short time to avoid CPU spinning
                time.sleep(0.1)
                
        except KeyboardInterrupt:
            logger.info("Received keyboard interrupt. Shutting down...")
        
        finally:
            # Close KDB+ connection
            if self.q and self.q.is_connected():
                self.q.close()
                logger.info("Closed KDB+ connection")


def main():
    """Main function to parse arguments and run the Yahoo Finance Streamer"""
    parser = argparse.ArgumentParser(description='Stream stock data from Yahoo Finance to KDB+')
    
    parser.add_argument('--tickers', '-t', 
                        required=True,
                        help='Path to CSV file containing ticker symbols')
    
    parser.add_argument('--host', 
                        default=os.environ.get('KDB_HOST', 'localhost'),
                        help='KDB+ host address (default: localhost)')
    
    parser.add_argument('--port', 
                        type=int,
                        default=int(os.environ.get('KDB_PORT', '5010')),
                        help='KDB+ port number (default: 5010)')
    
    parser.add_argument('--table', 
                        default=os.environ.get('KDB_TABLE', 'stocks'),
                        help='KDB+ table name to publish data to (default: stocks)')
    
    parser.add_argument('--interval', '-i',
                        type=int,
                        default=int(os.environ.get('UPDATE_INTERVAL', '30')),
                        help='Update interval in seconds (default: 30)')
    
    args = parser.parse_args()
    
    # if datetime.datetime.now().weekday() >= 5: sys.exit("The equity market is closed on weekends.")
    try:
        # Create and run the data streamer
        streamer = YahooFinanceStreamer(
            tickers_file=args.tickers,
            kdb_host=args.host,
            kdb_port=args.port,
            table_name=args.table,
            interval=args.interval
        )
        
        streamer.start_streaming()
        
    except Exception as e:
        logger.error(f"Error running Yahoo Finance streamer: {e}")
        return 1
    
    return 0


if __name__ == "__main__":
    exit(main())
