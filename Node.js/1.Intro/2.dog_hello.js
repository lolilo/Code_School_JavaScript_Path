var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Dog is running."); // callback

  // non-blocking timeout
  setTimeout(function() {
  	response.write("Dog is done."); // callback
  	response.end();
  }, 5000); // 5000ms = 5 seconds

}).listen(8080);

