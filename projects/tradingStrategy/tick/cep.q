/q tick/r.q [host]:port[:usr:pwd] [host]:port[:usr:pwd]
/2008.09.09 .k ->.q

if[not "w"=first string .z.o;system "sleep 1"];

upd:insert;

/ get the ticker plant and history ports, defaults are 5010,5012
.u.x:.z.x,(count .z.x)_(":5010";":5012");

/ end of day: save, clear, hdb reload
/ .u.end:{t:tables`.;t@:where `g=attr each t@\:`sym;.Q.hdpf[`$":",.u.x 1;`:.;x;`sym];@[;`sym;`g#] each t;};

// Dummy end of day function to disable save to disk
.u.end:{:()};

/ init schema and sync up from log file;cd to hdb(so client save can run)
.u.rep:{(.[;();:;].)each x;if[null first y;:()];-11!y;system "cd ",1_-10_string first reverse y};
/ HARDCODE \cd if other than logdir/db

/ connect to ticker plant for (schema;(logcount;log))
.u.rep .(hopen `$":",.u.x 0)"(.u.sub[`;`];`.u `i`L)";

priceChart:{[stock;range] 
	sublist[range;] select time,price,sma50,sma200,buy_SD_CIRCLE,buy_SD_SIZE,sell_SD_CIRCLE,sell_SD_SIZE from 
	update buy_SD_CIRCLE:buy*signal,buy_SD_SIZE:10,sell_SD_CIRCLE:abs sell*signal,sell_SD_SIZE:10 from 
	update action:`sell`doNothing`buy 1+signal,buy:?[signal=1;price;0N],sell:?[-1=signal;price;0n] from 
	update signal:deltas 0<signum sma50-sma200 from 
	select time,sym,sma50:mavg[50;close],sma200:mavg[200;close],price:close from stocks where sym=stock}



volumeChart:{[stock;range] select time,avgVolume:avg volume, volume from sublist[range;] select time,volume from stocks where sym=stock};

volume_realTime:{[stock] select time,volume,avgVolume:avg volume from stocks where sym=stock};

analytics:{[stock;range;columns]
         chartColumns:`time`price`sma50`sma200`buy_SD_CIRCLE`buy_SD_SIZE`sell_SD_CIRCLE`sell_SD_SIZE;
         tableColumns:`time`sym`action`buy`sell`price`volume`sma50`sma200;
         c:();
         if[columns=`tab;c:tableColumns];
         if[columns=`chart;c:chartColumns];
         ?[;();0b;{x!x} c]
         sublist[range;] `time xasc update buy_SD_CIRCLE:buy*signal,buy_SD_SIZE:10,sell_SD_CIRCLE:abs sell*signal,sell_SD_SIZE:10 from
         update action:`sell`doNothing`buy 1+signal,buy:?[signal=1;price;0N],sell:?[-1=signal;price;0n] from
         update signal:deltas 0<signum sma50-sma200 from
         select time,sym,sma50:mavg[50;close],sma200:mavg[200;close],price:close,volume from stocks where sym=stock};

analytics_realTime:{[stock;columns]
         chartColumns:`time`price`sma50`sma200`buy_SD_CIRCLE`buy_SD_SIZE`sell_SD_CIRCLE`sell_SD_SIZE;
         tableColumns:`time`sym`action`buy`sell`price`volume`sma50`sma200;
         c:();
         if[columns=`tab;c:tableColumns];
         if[columns=`chart;c:chartColumns];
         ?[;();0b;{x!x} c]
         `time xasc update buy_SD_CIRCLE:buy*signal,buy_SD_SIZE:10,sell_SD_CIRCLE:abs sell*signal,sell_SD_SIZE:10 from
         update action:`sell`doNothing`buy 1+signal,buy:?[signal=1;price;0N],sell:?[-1=signal;price;0n] from
         update signal:deltas 0<signum sma50-sma200 from
         select time,sym,sma50:mavg[50;close],sma200:mavg[200;close],price:close,volume from stocks where sym=stock}


