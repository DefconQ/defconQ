
//1_flip `date`open`high`low`close`volume`dividends`stockSplit!("PFFFFJFF";csv) 0: `:VOW3.DE_20250506_221421.csv


data:([] date:`date$(); sym:`symbol$(); feedHandlerTime: `timestamp$(); open: `float$(); high: `float$(); low: `float$(); close: `float$(); volume: `long$(); dividends: `float$(); stockSplit: `float$());
colsToLoad:`date`open`high`low`close`volume`dividends`stockSplit;
files:key `:.;

// TODO 
// change ":/Users/alexanderunterrainer/repos/financeData/hdb/" to your HDB directory 

loadData:{[file]
	s:`$first "_" vs string file;
	`data insert `date`sym`feedHandlerTime xcols update `date$date,sym:s,feedHandlerTime:date from 1_flip colsToLoad!("PFFFFJFF";csv) 0: hsym file;
	};

saveOneDate:{[hdbDir;t;d]
	`stocks set select from t where date=d;
	.Q.dpft[hdbDir;d;`sym;`stocks];
	delete stocks from `.;
	};

saveData:{[]
	d:exec distinct date from data;
	saveOneDate[`$":/Users/alexanderunterrainer/repos/financeData/hdb/";data;] each d;
	};


// Optimisation using Nick Psaris' trick
//q)\ts {[hdbDir;d;t] `stocks set t;.Q.dpft[hdbDir;d;`sym;`stocks];delete stocks from `.;}[`$":/Users/alexanderunterrainer/repos/financeData/hdb/"]'[key g;value g:data group data`date]
//242 12766 13391008
//243 q)\ts {[hdbDir;d;t] `stocks set t;.Q.dpft[hdbDir;d;`sym;`stocks];delete stocks from `.;}[`$":/Users/alexanderunterrainer/repos/financeData/hdb/"]'[key g;value g:data group data`date]
//244 13449 13391008	

saveOneDateP:{[hdbDir;t;d]
        toSave:delete date from update `p#sym from `sym`feedHandlerTime xasc select from t where date=d;
        (` sv (.Q.par[hdbDir;d;`stocks];`)) set toSave
        }

saveDataP:{[data]
        data:.Q.en[hdbDir:`$":/Users/alexanderunterrainer/repos/financeData/hdb/"] data;
        d:exec distinct date from data;
        saveOneDateP[hdbDir;data;] peach d
        }

// .Q.dpft explained

//q).Q.dpft
//k){[d;p;f;t;s]
//	if[` in f,c:!+r:`. . `\:t;'`domain];
//	if[~f in c;'f];
//	i:<t f;
//	r:+enxs[$;d;r;s];
//	{[d;t;i;u;x]@[d;x;:;u t[x]i]}[d:par[d;p;t];r;i;]'[(::;`p#)f=c;c];
//	@[d;`.d;:;f,c@&~f=c];t}[;;;;`sym]

saveDataP1:{[data]
	data:.Q.en[hdbDir:`$":/Users/alexanderunterrainer/repos/financeData/hdb/"] data;
	d:exec distinct date from data;
	saveOneDateP1[hdbDir;data;] peach d;
	}

saveOneDateP1:{[hdbDir;t;d]
	path:.Q.par[`$":/Users/alexanderunterrainer/repos/financeData/hdb";d;`stocks];
	data:delete date from select from t where date=d;
	c:cols data;
	i:iasc data`sym;
	saveOneCol[path;data;i;] peach c;
	@[path;`sym;`p#];
	@[path;`.d;:;`sym,except[c;`sym]];
	}

saveOneCol:{[path;data;i;c]
	(` sv (path;c)) set data[c] i;
	}

saveDataP2:{[data]
        data:.Q.en[hdbDir:`$":/Users/alexanderunterrainer/repos/financeData/hdb/"] `sym`feedHandlerTime xasc data;
        d:exec distinct date from data;
        saveOneDateP2[hdbDir;data;] peach d;
        }

saveOneDateP2:{[hdbDir;t;d]
        path:.Q.par[`$":/Users/alexanderunterrainer/repos/financeData/hdb";d;`stocks];
        data:delete date from select from t where date=d;
        c:cols data;
        saveOneCol1[path;data;] peach c;
	@[path;`sym;`p#];
        @[path;`.d;:;`sym,except[c;`sym]];
        }

saveOneCol1:{[path;data;c]
        (` sv (path;c)) set data@c
        }

// ` sv (`$":/Users/alexanderunterrainer/repos/financeData/hdb";`$string .z.d;`stocks;`sym;`)


