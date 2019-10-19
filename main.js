// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello NodeApp55!! \n");
});

// listen on localhost:7800
server.listen(7800);
console.log("Server listening on port 7800 :  http://127.0.0.1:7800/");
