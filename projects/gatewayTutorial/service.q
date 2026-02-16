\T 10 
\p 2222
LB:0;

// Function to create a connection with the loadbalancer
connectToLoadbalancer:{@[{NLB::neg LB::hopen x}; `:localhost:1234; {show "Can't connect to Load Balancer-> ",x}]};

// The name of our service, in this case it's an Equity RDB
serviceName:`EQUITY_MARKET_RDB;

// List used to send as parameter to the load balancer asynchronously
// This will invoke the registerService function on the load balancer, registering the service with the load balancer. 
// The registerService function then registers the service with the gateway
// @listElement1 `registerService - the function name to be invoked on the load balancer
// @listElement2 serviceName - the first parameter to the registerService function, the name of the service to be registered 
// @listElement3 host:port details
serviceDetails:(`registerService; serviceName; `$":" sv string (();.z.h;system"p"));

// Function executing the client query and returning the result to the gateway which ultimately returns the result to the client
// @param nh - the (negative) gateway handle to return the result asynchronously
// @param rq - the client request. This is a tuple, a list containing two elements
// 	  rq 0 - the sequence number (sq) of the request
// 	  rq 1 - the actual client query to be executed on the backend service
execQuery:{[nh;rq] nh(`returnRes;(rq 0;@[value;rq 1;{x}]));nh[]};

// Function invoked by the gateway to trigger the data retrieval. 
// @param x - tuble, list consisting of two elements
// 	  x 0 - the sequence number (sq) of the client request
// 	  x 1 - the actual client request
queryService:{ 
  // We create a projection to return the error message to the client in case the query execution fails
  errProj:{[nh;sq;er]nh(sq;`$er);nh[]}; 
  // Trap the query execution. If the execQuery function runs without error, the result will have been returned to the client.
  // if the execution fails, the errProj function will return an error message to the gateway
  @[execQuery[neg .z.w];x;errProj[neg .z.w;x 0]]; 
  // Mark the service as free on the loadbalancer so it can be used for another client request
  NLB(`releaseService;serviceName) };

// Function called on timer invocation
// This function will invoke the connectToLoadbalancer function, opening a connection with the load balancer and if successful, register
// itself with it.
.z.ts:{connectToLoadbalancer[];if[0<LB;@[NLB;serviceDetails;{show x}];value"\\t 0"]};

// System function invoked whenever a connection to the service process, i.e. this process is closed
// If the loadbalancer disconnected from our service, set the timer to 10 seconds such that a reconnection is triggered
.z.pc:{[handle]if[handle~LB;LB::0;value"\\t 10000"]};

// Invoke the internal timer. This will start the connection process to the loadbalancer
.z.ts[];

// Dummy data, quote and trade data
quote:([] date:10#.z.D-1; sym:10#`APPL; time:09:30t+00:30t*til 10; bid:100.+0.01*til 10; ask:101.+0.01*til 10)
trade:([] date:10#.z.D-1; sym:10#`AAPL; time:09:30t+00:30t*til 10; price:100.+0.01*til 10; size:10#100)

