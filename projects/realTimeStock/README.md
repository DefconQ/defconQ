# Yahoo Finance to KDB/Q Stock Data Streamer

I've created a Python script that downloads stock data from Yahoo Finance at configurable intervals and prepares it for streaming to a KDB/Q ticker plant using qpython. The script reads ticker symbols from a CSV file, allowing for easy configuration of which stocks to monitor.

You can find the full step-by-step tutorial on my blog, [DefconQ](https://www.defconq.tech/docs/category/tutorials).

## Prerequisites
Before running the script, you need to install the following dependencies:

```
pip install yfinance pandas numpy qpython
```

## Key Features

- Configurable ticker symbols via a CSV file
- Flexible update interval (default: 30 seconds)
- Batch processing to handle large numbers of stocks
- Robust error handling for network issues and API limits
- Connection retry mechanism for KDB+ connectivity
- Detailed logging for monitoring and troubleshooting
- Command-line arguments for easy configuration

## How to Run

1. Create a CSV file with your ticker symbols (example provided)
2. Start the KDB/Q Tickerplant (TP)
3. Start the Real-Time Database (RDB)
4. Run the Feedhandler script with the following command

```
// Tickerplant
qq tick.q sym . -p 5010

// Real-Time Database
qq tick/r.q :5010 -p 5011

// Feedhandler
python yahoo_finance_streamer.py --tickers tickers.csv
```

### Command-line Options for your Feedhandler

- `--tickers` or `-t`	: Path to CSV file containing ticker symbols (required)
- `--host`		: KDB/Q host address (default: localhost)
- `--port`		: KDB/Q port number (default: 5010)
- `--table`		: KDB/Q table name to publish data to (default: trade)
- `--interval` or `-i`	: Update interval in seconds (default: 30)

### Environment Variables

- `KDB_HOST`		: KDB/Q host address
- `KDB_PORT`		: KDB/Q port number
- `KDB_TABLE`		: KDB/Q table name
- `UPDATE_INTERVAL`	: Update interval in seconds

## CSV File Format

The script supports various CSV formats and will try to intelligently find the column containing ticker symbols. An example tickers.csv file is provided that contains common US stocks like AAPL, MSFT, GOOGL, etc.

## Table Schema and Data Fields

- timestamp
- symbol
- open, high, low, close prices
- volume
- bid, ask
- bid_size, ask_size

## Implementation Notes

The script uses `yfinance.Tickers` for batch data retrieval to improve efficiency
Data is fetched in batches of 50 symbols to avoid API rate limits
The KDB+ connection uses the `.u.upd` function for standard tickerplant integration
Timestamps are converted to a KDB+-compatible format




