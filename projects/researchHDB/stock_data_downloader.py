#!/usr/bin/env python3
"""
Stock Data Downloader

This script downloads historical stock data for a list of instruments using the yfinance API
and saves the data to CSV files in a specified directory.

Ticker symbols are read from a CSV file.
"""

import os
import csv
import yfinance as yf
import pandas as pd
from datetime import datetime
import argparse

def read_symbols_from_csv(file_path):
    """
    Read ticker symbols from a CSV file.
    
    Parameters:
    -----------
    file_path : str
        Path to the CSV file containing ticker symbols
        
    Returns:
    --------
    list
        List of ticker symbols
    """
    symbols = []
    try:
        with open(file_path, 'r') as f:
            for line in f:
                # Skip empty lines and comments
                line = line.strip()
                if not line or line.startswith('#'):
                    continue
                # Get the first item (symbol) from each line
                symbol = line.split(',')[0].strip()
                symbols.append(symbol)
        
        return symbols
    except Exception as e:
        print(f"Error reading symbols file: {e}")
        return []

def download_stock_data(tickers, start_date, end_date, period, interval, output_dir):
    """
    Download historical stock data for a list of tickers and save to CSV files.
    
    Parameters:
    -----------
    tickers : list
        List of ticker symbols
    start_date : str
        Start date in YYYY-MM-DD format
    end_date : str
        End date in YYYY-MM-DD format
    period : str
        Valid periods: 1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max
    interval : str
        Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo
    output_dir : str
        Directory to save data files
    """
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Current timestamp for naming files
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    for ticker in tickers:
        try:
            print(f"Downloading data for {ticker}...")
            
            # Get ticker data
            stock = yf.Ticker(ticker)
            
            # Download historical data
            if start_date and end_date:
                df = stock.history(start=start_date, end=end_date, interval=interval)
            else:
                df = stock.history(period=period, interval=interval)
            
            if df.empty:
                print(f"No data available for {ticker}")
                continue
                
            # Create filename
            filename = f"{ticker}_{timestamp}.csv"
            file_path = os.path.join(output_dir, filename)
            
            # Save to CSV
            df.to_csv(file_path)
            print(f"Data for {ticker} saved to {file_path}")
            
        except Exception as e:
            print(f"Error downloading data for {ticker}: {e}")

def main():
    parser = argparse.ArgumentParser(description='Download stock data using yfinance')
    parser.add_argument('--symbols_file', default='symbols.csv', help='CSV file containing ticker symbols')
    parser.add_argument('--start_date', help='Start date (YYYY-MM-DD)')
    parser.add_argument('--end_date', help='End date (YYYY-MM-DD)')
    parser.add_argument('--period', default='1y', help='Period (1d,5d,1mo,3mo,6mo,1y,2y,5y,10y,ytd,max)')
    parser.add_argument('--interval', default='1d', help='Interval (1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo)')
    parser.add_argument('--output_dir', default='stock_data', help='Output directory')
    
    args = parser.parse_args()
    
    # Check if symbols file exists
    if not os.path.isfile(args.symbols_file):
        print(f"Error: Symbols file '{args.symbols_file}' not found.")
        print("Create a CSV file with one symbol per line, or specify a different file with --symbols_file option.")
        return
    
    # Read ticker symbols from CSV file
    tickers = read_symbols_from_csv(args.symbols_file)
    
    if not tickers:
        print("No valid ticker symbols found in the file.")
        return
    
    print(f"Found {len(tickers)} ticker symbols: {', '.join(tickers)}")
    
    download_stock_data(
        tickers,
        args.start_date,
        args.end_date,
        args.period,
        args.interval,
        args.output_dir
    )

if __name__ == "__main__":
    main()
