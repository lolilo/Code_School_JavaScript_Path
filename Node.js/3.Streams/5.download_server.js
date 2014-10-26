// Download Server
// 250Points
// Let's create an HTTP server that allows you to download the icon.png file. 
// This time you can use 'pipe' to send the read stream into the response.

// I don't understand what's what -- request vs response.
// request is incoming data
// response is outgoing data 

// request is an instance of http.IncomingMessage
// response is an instance of http.ServerResponse

// pipe documentation, 
// readable.pipe(destination, [options])

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'image/png'});

  var file = fs.createReadStream('icon.png');
  file.pipe(response); // pipe goes in the direction file -> response. server is sending out data/responding.
	
});


// ### longer version with more features 
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'image/png'});

  var file = fs.createReadStream('icon.png');
  var fileBytes = request.headers['content-length']; // find total bytes of target file
  var downloadedBytes = 0; // keep track of already downloaded bytes
  
  file.pipe(response); 

  request.on('data', function(chunk) {
    downloadedBytes += chunk.length; // update
    var progress = (downloadedBytes / fileBytes) * 100;
    response.write("progress: " + parseInt(progress, 10) + "%\n";
  });

});
