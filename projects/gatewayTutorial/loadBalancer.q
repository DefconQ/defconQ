\p 1234

// table to keep track of all available backend services and which gateway is currently using them
// @key handle - the handle to the backend service
// @col address - the address of the backend service
// @col serviceName - the name of the service
// @col gwHandle - the handle of the gateway currently using this backend service
// @col sq - sequence number of the assigned query
// @col udt - timestamp
services:([handle:`int$()] address:`$(); serviceName:`$(); gwHandle:`int$(); sq:`int$(); udt:`timestamp$());

// table maintaining a service queue. Keeps track of incoming requests from the gateway waiting to be assigned to a resource
// @key gwHandle - the gateway handle
// @key sq - sequence number
// @col serviceName - the name of the service
// @col time - timestamp 
serviceQueue:([gwHandle:`int$();sq:`int$()] serviceName:`$(); time:`timestamp$());

// List of gateway handles
gateways:();

// Function to register the gateway with the loadbalancer.
// Adds the gateway handle to the list of gateway handles
// @return - returns a table of available backend services with their serviceName and address
registerGW:{gateways,:.z.w ; select serviceName, address from services};

// Function to register a backend service with the loadbalancer and all the available gateways
// @param name - the service name
// @param addr - the address of the service
registerService:{[name;addr]
  // Add the service to the table of available backend services
  `services upsert (.z.w;addr;name;0N;0N;.z.p);
  // send the details of the available backend service to all the gateway so they can add them to their table of available services
  (neg gateways)@\:(`addService;enlist`serviceName`address!(name;addr)); 
  serviceAvailable[.z.w;name] };

// Function returning a query sequence and resource address to a gateway
// @param gw - gateway handle to which the service details are sent
// @param h - the handle of service for which we sent the details
sendService:{[gw;h]neg[gw]raze(`serviceAlloc;services[h;`sq`address])};

// This function returns the details of the first free service or adds the client request to the serviceQueue
// @param seq - the query sequence of the client request
// @param serv - the service the client wants to query
requestService:{[seq;serv]
  // Identify the first free backend service the client wants to query. If a service hasn't been assigned to a gateway, i.e null gwHandle
  // then the service is actually free
  res:exec first handle from services where serviceName=serv,null gwHandle; 
  // If there's no free service, add the query to the serviceQueue, otherwise update the service table with the details of the incoming query
  $[null res;
    // no free service available, add the query to the service queue
    addQueryToQueue[seq;serv;.z.w];
    // if a service is free, update the service table with the details of the query such as gateway handle it came from, sequence number of the query and the timestamp when it was recorded 
    [services[res;`gwHandle`sq`udt]:(.z.w;seq;.z.p);
      // return the handle of the free service to the gateway
      sendService[.z.w;res]]] };

// Function that adds a client request to the serviceQueue
// @param seq - the sequence number of the client query
// @param serv - service name of the service the client is interested
// @param gw - the handle of the gateway that processes the cleint request
addQueryToQueue:{[seq;serv;gw]`serviceQueue upsert (gw;seq;serv;.z.p)};

// Function to release a backend service because it's no longer needed
// @param x - the service name of the backend service to be released
releaseService:{
  // Verify if the function was invoked by a backend service or a gateway and then invoke serviceAvailable
  serviceAvailable . $[.z.w in (0!services)`handle;
    // if the function was invoked by a backend service, the query completed successfully
    (.z.w;x);
    // otherwise the client connection was dropped and the function was invoked by a gateway. Find the details of the client query and mark the corresponding backend service as available
    value first select handle,serviceName from services 
      where gwHandle=.z.w,sq=x ] };

// Function to mark a service as available
// @param zw - the handle of the backend service to be marked as available
// @param serv - the service name of the service to be marked as available
serviceAvailable:{[zw;serv]
  // select all gateway and sequence number combinations where the service name matches the name of the backend service to be freed
  // in addition, store the details of the very first query from the service queue
  nxt:first n:select gwHandle,sq from serviceQueue where serviceName=serv;
  // remove the first query from the service queue as this has been processed now
  serviceQueue::(1#n)_ serviceQueue;
  // update the service table with the corresponding details
  services[zw;`gwHandle`sq`udt]:(nxt`gwHandle;nxt`sq;.z.p);
  // if there are still queries outstanding in the service queue, send the handle of the available backend service (zw) to the gateway whoes query is next in line
  if[count n; sendService[nxt`gwHandle;zw]] };


// system function invoked when a processes closes the connection to it
.z.pc:{[h]
  // because we are on the loadbalancer, if a service closes the connection to it, we remove it from the table of available services
  services _:h;
  // in case the closing connection was from the gateway, remove the handle from the list of gateway handles
  gateways::gateways except h;
  // if there is a query waiting in the serviceQueue associated with a closing gateway, remove the query from the serviceQueue
  delete from `serviceQueue where gwHandle=h;
  // if any of the backend services had been occupied by the closing gateway, reset the gwHandle to null to free up the service.
  update gwHandle:0N from `services where gwHandle=h };


