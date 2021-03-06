// Listen for close
// 250Points
// Like our parents always used to say, listening is more important than talking!
// So let's listen for the 'close' event on the server, and log the string "Closing down the server..." inside the callback, that way we'll know if our server has closed down.


var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function(request, response) {
  console.log("Closing down the server...");
});

server.listen(8080);
