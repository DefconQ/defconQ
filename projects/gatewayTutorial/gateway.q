\p 5555

// Table to keep track of all available backend services
// @key address - Address of the backend service
// @col serviceName - Name of the service
// @col sh - handle of the service
services:([address:()] serviceName:();sh:());

// Table to track all user queries.
// @key sq - sequenceID of the user query
// @col uh - user handle
// @col rec - timestamp of when the user query was recorded by the gateway
// @col snt - timestamp of when the user query was sent to a backend service
// @col ret - timestamp of when the result of the user query was sent back to the user
// @col user - the user ID
// @col sh - the handle of the service to which the user query was sent to
// @col serv - the name of the service the user is interested in 
// @col query - the user query
userQueries:([sq:`int$()] uh:`int$(); rec:`timestamp$(); snt:`timestamp$(); ret:`timestamp$(); user:`$(); sh:`int$(); serv:`$(); query:());

// Function to create a connection with the loadbalancer
connectToLoadbalancer:{@[{NLB::neg LB::hopen x};`:localhost:1234;{show x}]}; 

// Function to register gateway with loadbalancer. 
// The loadbalancer returns a table of available backend services which are then upserted into the gateway service table
registerGatewayWithLoadbalancer:{addService LB(`registerGW;`)};

// Function to upsert the details of available backend services into the service table.
// The function also opens also a connection from the gateway to each service directly and stores the connection handle in the service table
addService:{ `services upsert `address xkey update sh:{hopen first x}each address from x };

// Entry function for the client. This function is called by the client to fetch data from the backend service
// @param x - tuple, a two element list where the first element x 0 is the name of the service to query and the 
// 	second element x 1 is the actual query
getData:{
  // Verify if the service the client wants to query is actually valid 
  $[(serv:x 0) in exec distinct serviceName from services;
    // if the service is valid, add the query to the userQueries table and send a request to the loadbalancer to get a free instance
    [userQueries,:(SEQ+:1;.z.w;.z.p;0Np;0Np;.z.u;0N;serv;x 1); 
      NLB(`requestService;SEQ;serv)];
    // if the service is invalid, return an error message
    (neg .z.w)(`$"Service Unavailable")] };

// Function to send the user query to the allocated, free service. This will ultimately send a request to invoke the data retrieval function on the backend service
// This function is invoked by the loadbalancer when returning a free backend service that can process the client query
// @param sq - the sequence number of the user query
// @param addr - the address of the free backend service to which the user query should be send to
serviceAlloc:{[sq;addr]
  // verify if the user is still alive and waiting for a result
  $[null userQueries[sq;`uh];
    // if not, release the backend service and free up the resource
    NLB(`releaseService;sq);
    // if the client is still waiting, invoke the data retrieval function "queryService" on the backend service
    [(neg sh:services[addr;`sh]) (`queryService;(sq;userQueries[sq;`query]));
    // track the details of the query in the userQueries table. i.e when was the request sent
    userQueries[sq;`snt`sh]:(.z.p;sh)]]};

// This function returns the result from the gateway to the client
// @param res - tuple, two element list. res 0 contains the sequence number sq of the specific query
// 		res 1 contains the actual result of the client query
returnRes:{[res]
  // Find the user handle for the specific query, this is in the result at index 0
  uh:first exec uh from userQueries where sq=(res 0); 
  // if the user handle is not null, return the result to the client. The result is stored in res at index 1
  if[not null uh;(neg uh)(res 1)];
  // Update the details of the query in the userQueries table, i.e. time of when the result was returned
  userQueries[(res 0);`ret]:.z.p };

// .z.pc is the system function that is invoked when a process closes the connection to our gateway, whether intentionally or unintentionally
.z.pc:{[handle]
  // if the handle that terminated the connection was a user, invalidate all outstanding user queries. The client is no longer interested
  update uh:0N from `userQueries where uh=handle;
  // if the handle was a worker, i.e backend service, we remove the handle from the available service handles. Our worker needs a break
  delete from `services where sh=handle;
  // if a backend service disconnected, send an error message to all clients that were waiting on a result from this backend service
  if[count sq:exec distinct sq from userQueries where sh=handle,null ret;
    returnRes'[sq cross `$"Service Disconnect"]]; 
  // if the load balancer disconnected from the gateway
  if[handle~LB;
    // send an error message to all clients that are still waiting for a result
    (neg exec uh from userQueries where not null uh,null snt)@\:`$"Service Unavailable";
    // Close connection to all backend services given that the loadbalancer is down
    hclose each (0!services)`sh;
    // empty the table containing the details about the services
    delete from `services;
    // update the userQueries table to reflect that the load balancer died
    update snt:.z.p,ret:.z.p from `userQueries where not null uh,null snt; 
    // reset the load balancer handle and set a timer to retry a connection in 10 seconds
    // to try and reconnect to Load Balancer process
    LB::0; NLB::0; value"\\t 10000"] };

// timer function
.z.ts:{
  // establish a connection to the load balancer
  connectToLoadbalancer[]; 
  // if the connection attempt was successful, register the gateway with the load balancer and set the timer to 0
  if[0<LB;@[registerGatewayWithLoadbalancer;`;{show x}];value"\\t 0"] };

// invoke the timer function
.z.ts[]
