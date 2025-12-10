// Define table schema for data we are going to load 
data:([] time:`timestamp$(); sym:`symbol$(); feedHandlerTime: `timestamp$(); open: `float$(); high: `float$(); low: `float$(); close: `float$(); volume: `long$());

// List of files we want to load (Change this path to your file location. Note:folder should only contain your data as everything in the folder will be loaded)
fileList:key `$":/Users/alexanderunterrainer/repos/defconQ/projects/tradingStrategy/stock_data";

loadData:{[file]
    // Extract the name of the stock from the file name
    name:`$first "_" vs string file;
    // Load the data for the specific file, update the sym column with the stock name and a feedHandlerTime
    `data insert update sym:name,`timestamp$`date$time,feedHandlerTime:time from `time`open`high`low`close`volume xcol ("PFFFFJ";enlist csv) 0:hsym file;
 };


// publish all data in once
// h:hopen 5010
// h(`.u.upd;`stocks;data)i

// backtesting engine

// dateList:exec distinct `date$time from data;

stream:{-1"Streaming data for date:",string dateList cntr;h(`.u.upd;`stocks;select from data where $[`date;time]=dateList cntr);cntr::cntr+1};

cntr:0;

// .z.ts:stream[]

// Set timer interval to 100 milliseconds
// \t 100
