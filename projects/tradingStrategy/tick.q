/ q tick.q sym . -p 5001 </dev/null >foo 2>&1 &

/q tick.q SRC [DST] [-p 5010] [-o h]
system"l tick/",(src:first .z.x,enlist"sym"),".q"

if[not system"p";system"p 5010"]

\l tick/u.q
\d .u
ld:{if[not type key L::`$(-10_string L),string x;.[L;();:;()]];i::j::-11!(-2;L);if[0<=type i;-2 (string L)," is a corrupt log. Truncate to length ",(string last i)," and restart";exit 1];hopen L};
tick:{init[];if[not min(`time`sym~2#key flip value@)each t;'`timesym];@[;`sym;`g#]each t;d::.z.D;if[l::count y;L::`$":",y,"/",x,10#".";l::ld d]};

endofday:{end d;d+:1;if[l;hclose l;l::0(`.u.ld;d)]};
ts:{if[d<x;if[d<x-1;system"t 0";'"more than one day?"];endofday[]]};


 if[not system"t";system"t 1000"];
 .z.ts:{ts .z.D};
 
 upd:{[t;x]
 	ts"d"$a:.z.P;
	pub[t;x];
	if[l;l enlist (`upd;t;x);i+:1];
 };

\d .
.u.tick[src;.z.x 1];
