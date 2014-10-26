// Response WriteHead
// 250Points
// Up until now all we've been sending into the writeHead function is the status code. However, it can take additional parameters. Consult the node documentation, and add 'Content-Type' of 'text/html' to the response.

// http://nodejs.org/api/http.html#http_response_writehead_statuscode_reasonphrase_headers

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200, {
  'Content-Type': 'text/html' });

  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });

}).listen(8080);
