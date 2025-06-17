#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Historical Databento data streamer to KDB+
- Downloads historical stock data from Databento
- Streams data to a KDB+ ticker plant using kola
- Uses Polars DataFrames for efficient data processing
Run CMD:
python databento_streamer.py \
  --databento-key YOUR_API_KEY \
  --dataset XNAS.ITCH \
  --schema trades \
  --symbols AAPL TSLA MSFT \
  --start-date 2024-01-01 \
  --end-date 2024-01-02 \
  --interval 60

"""

import os
import time
import datetime
import sys
import argparse
import logging
import polars as pl
import numpy as np
import databento as db
from pathlib import Path
from typing import List, Dict, Any, Optional
import kola


# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


class DatabentoStreamer:
    """
    Class to download historical data from Databento and stream to KDB+ ticker plant
    """
    
    def __init__(
        self,
        databento_key: str,
        kdb_host: str = 'localhost',
        kdb_port: int = 5010,
        table_name: str = 'trades',
        interval: int = 30,
        retry_limit: int = 3,
        retry_delay: int = 5,
        dataset: str = 'XNAS.ITCH',
        start_date: str = None,
        end_date: str = None,
        symbols: List[str] = None,
        schema: str = 'trades'
    ):
        """
        Initialize the Databento Streamer
        
        Args:
            databento_key: Databento API key
            kdb_host: KDB+ host address
            kdb_port: KDB+ port number
            table_name: KDB+ table name to publish data to
            interval: Update interval in seconds
            retry_limit: Maximum number of connection retries
            retry_delay: Delay between retries in seconds
            dataset: Databento dataset (e.g., 'XNAS.ITCH')
            start_date: Start date for historical data (YYYY-MM-DD)
            end_date: End date for historical data (YYYY-MM-DD)
            symbols: List of symbols to fetch (default: ['AAPL', 'TSLA'])
            schema: Data schema (trades, tbbo, ohlcv-1s, etc.)
        """
        self.databento_key = databento_key
        self.kdb_host = kdb_host
        self.kdb_port = kdb_port
        self.table_name = table_name
        self.interval = interval
        self.retry_limit = retry_limit
        self.retry_delay = retry_delay
        self.dataset = dataset
        self.start_date = start_date or (datetime.date.today() - datetime.timedelta(days=1)).strftime('%Y-%m-%d')
        self.end_date = end_date or datetime.date.today().strftime('%Y-%m-%d')
        self.symbols = symbols or ['AAPL', 'TSLA']  # Default symbols as per Databento example
        self.schema = schema
        self.kdb_conn = None
        self.client = None
        
    def _connect_to_databento(self) -> bool:
        """
        Initialize Databento client
        
        Returns:
            True if connection successful, False otherwise
        """
        try:
            logger.info("Initializing Databento client...")
            self.client = db.Historical(key=self.databento_key)
            logger.info("Successfully initialized Databento client")
            return True
            
        except Exception as e:
            logger.error(f"Failed to initialize Databento client: {e}")
            return False
    
    def _connect_to_kdb(self) -> bool:
        """
        Establish connection to KDB+ server with retry mechanism using kola
        
        Returns:
            True if connection successful, False otherwise
        """
        for attempt in range(1, self.retry_limit + 1):
            try:
                logger.info(f"Connecting to KDB+ at {self.kdb_host}:{self.kdb_port} (attempt {attempt}/{self.retry_limit})")
                self.kdb_conn = kola.Q(host=self.kdb_host, port=self.kdb_port)
                logger.info(f"Successfully connected to KDB+ using kola")
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
    
    def _fetch_databento_data(self) -> pl.DataFrame:
        """
        Fetch historical data from Databento
        
        Returns:
            Polars DataFrame with historical market data
        """
        if not self.client:
            logger.error("Databento client not initialized")
            return pl.DataFrame()
        
        try:
            logger.info(f"Fetching {self.schema} data from {self.dataset} for symbols {self.symbols}")
            logger.info(f"Date range: {self.start_date} to {self.end_date}")
            
            # Fetch data using Databento client
            data = self.client.timeseries.get_range(
                dataset=self.dataset,
                schema=self.schema,
                start=self.start_date,
                end=self.end_date,
                symbols=self.symbols,
            )
            
            # Convert to DataFrame
            df = data.to_df()
            
            if df.empty:
                logger.warning("No data returned from Databento")
                return pl.DataFrame()
            
            # Convert pandas DataFrame to Polars DataFrame
            df_polars = pl.from_pandas(df)
            
            logger.info(f"Retrieved {len(df_polars)} records from Databento")
            
            print(df_polars)
            
            return df_polars
            
        except Exception as e:
            logger.error(f"Error fetching data from Databento: {e}")
            return pl.DataFrame()
    
    def _process_databento_data(self, raw_data: pl.DataFrame) -> pl.DataFrame:
        """
        Process and standardize Databento data for KDB+ streaming
        Cast all columns to kola-supported Polars data types
        
        Args:
            raw_data: Raw Polars DataFrame from Databento
            
        Returns:
            Processed Polars DataFrame ready for KDB+ streaming
        """
        if raw_data.is_empty():
            return pl.DataFrame()
        
        try:
            processed_data = raw_data
            
            # Cast all columns to kola-supported data types
            cast_expressions = []
            
            for col_name in processed_data.columns:
                col_dtype = processed_data[col_name].dtype
                
                # Cast based on current data type to kola-supported types
                if col_dtype in [pl.UInt8, pl.UInt16, pl.UInt32, pl.UInt64]:
                    # Cast unsigned integers to signed Int64
                    cast_expressions.append(pl.col(col_name).cast(pl.Int64))
                elif col_dtype in [pl.Int8, pl.Int16, pl.Int32]:
                    # Cast smaller signed integers to Int64
                    cast_expressions.append(pl.col(col_name).cast(pl.Int64))
                elif col_dtype == pl.Float32:
                    # Cast Float32 to Float64 for consistency
                    cast_expressions.append(pl.col(col_name).cast(pl.Float64))
                elif col_dtype in [pl.Utf8, pl.String]:
                    # Ensure string columns are Utf8
                    cast_expressions.append(pl.col(col_name).cast(pl.Utf8))
                elif col_dtype == pl.Boolean:
                    # Keep Boolean as is (supported by kola)
                    cast_expressions.append(pl.col(col_name))
                elif col_dtype == pl.Float64:
                    # Keep Float64 as is (supported by kola)
                    cast_expressions.append(pl.col(col_name))
                elif col_dtype == pl.Int64:
                    # Keep Int64 as is (supported by kola)
                    cast_expressions.append(pl.col(col_name))
                elif col_dtype in [pl.Datetime, pl.Date, pl.Time]:
                    # Keep datetime types as is (supported by kola)
                    cast_expressions.append(pl.col(col_name))
                else:
                    # For any other types, try to cast to string as fallback
                    logger.warning(f"Unknown data type {col_dtype} for column {col_name}, casting to string")
                    cast_expressions.append(pl.col(col_name).cast(pl.Utf8))
            
            # Apply all casting operations
            processed_data = processed_data.with_columns(cast_expressions)
            
            logger.info(f"Processed {len(processed_data)} records for streaming")
            logger.debug(f"Final column types: {processed_data.dtypes}")
            
            return processed_data
            
        except Exception as e:
            logger.error(f"Error processing Databento data: {e}")
            return pl.DataFrame()
    
    def _stream_to_kdb(self, data: pl.DataFrame) -> bool:
        """
        Stream data to KDB+ ticker plant using kola
        
        Args:
            data: Polars DataFrame with market data to publish
            
        Returns:
            True if successful, False otherwise
        """
        if data.is_empty():
            logger.warning("No data to stream to KDB+")
            return False
        
        if not self.kdb_conn:
            logger.error("Not connected to KDB+")
            return False
        
        try:
            # For debugging purposes only, uncomment to print data
            print(data)
            
            # Stream data to KDB+ using kola
            self.kdb_conn.sync(".u.upd", self.table_name, data)
            
            logger.info(f"Streamed {len(data)} records to KDB+ table '{self.table_name}'")
            return True
            
        except Exception as e:
            logger.error(f"Error streaming to KDB+: {e}")
            return False
    
    def start_streaming(self, max_iterations: Optional[int] = None) -> None:
        """
        Main execution loop - fetch data and stream to KDB+ at regular intervals
        
        Args:
            max_iterations: Optional maximum number of iterations (for testing)
        """
        if not self._connect_to_databento():
            logger.error("Failed to connect to Databento. Cannot start streaming")
            return
        
        if not self._connect_to_kdb():
            logger.error("Failed to connect to KDB+. Cannot start streaming")
            return
        
        iteration = 0
        next_run_time = time.time()
        
        try:
            logger.info(f"Starting data streaming for symbols {self.symbols} at {self.interval}s intervals")
            
            while True:
                current_time = time.time()
                
                # Check if it's time to run the next iteration
                if current_time >= next_run_time:
                    if max_iterations and iteration >= max_iterations:
                        logger.info(f"Reached maximum iterations ({max_iterations}). Stopping.")
                        break
                    
                    # Fetch data from Databento
                    raw_data = self._fetch_databento_data()
                    
                    # Process the data
                    processed_data = self._process_databento_data(raw_data)
                    
                    # Stream data to KDB+
                    if not processed_data.is_empty():
                        self._stream_to_kdb(processed_data)
                    
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
            if self.kdb_conn:
                try:
                    self.kdb_conn.close()
                    logger.info("Closed KDB+ connection")
                except Exception as e:
                    logger.error(f"Error closing KDB+ connection: {e}")


def main():
    """Main function to parse arguments and run the Databento Streamer"""
    parser = argparse.ArgumentParser(description='Stream historical data from Databento to KDB+ (Polars + kola)')
    
    parser.add_argument('--databento-key', '-k',
                        required=True,
                        help='Databento API key')
    
    parser.add_argument('--host', 
                        default=os.environ.get('KDB_HOST', 'localhost'),
                        help='KDB+ host address (default: localhost)')
    
    parser.add_argument('--port', 
                        type=int,
                        default=int(os.environ.get('KDB_PORT', '5010')),
                        help='KDB+ port number (default: 5010)')
    
    parser.add_argument('--table', 
                        default=os.environ.get('KDB_TABLE', 'trades'),
                        help='KDB+ table name to publish data to (default: trades)')
    
    parser.add_argument('--interval', '-i',
                        type=int,
                        default=int(os.environ.get('UPDATE_INTERVAL', '30')),
                        help='Update interval in seconds (default: 30)')
    
    parser.add_argument('--dataset',
                        default='XNAS.ITCH',
                        help='Databento dataset (default: XNAS.ITCH)')
    
    parser.add_argument('--schema',
                        default='trades',
                        help='Data schema (default: trades)')
    
    parser.add_argument('--start-date',
                        help='Start date for historical data (YYYY-MM-DD)')
    
    parser.add_argument('--end-date',
                        help='End date for historical data (YYYY-MM-DD)')
    
    parser.add_argument('--symbols',
                        nargs='+',
                        default=['AAPL', 'TSLA'],
                        help='List of symbols to fetch (default: AAPL TSLA)')
    
    args = parser.parse_args()
    
    try:
        # Create and run the data streamer
        streamer = DatabentoStreamer(
            databento_key=args.databento_key,
            kdb_host=args.host,
            kdb_port=args.port,
            table_name=args.table,
            interval=args.interval,
            dataset=args.dataset,
            schema=args.schema,
            start_date=args.start_date,
            end_date=args.end_date,
            symbols=args.symbols
        )
        
        streamer.start_streaming()
        
    except Exception as e:
        logger.error(f"Error running Databento streamer: {e}")
        return 1
    
    return 0


if __name__ == "__main__":
    exit(main())
