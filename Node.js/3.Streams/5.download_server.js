// Download Server
// 250Points
// Let's create an HTTP server that allows you to download the icon.png file. 
// This time you can use 'pipe' to send the read stream into the response.

// I don't understand what's what -- request vs response.

var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'image/png'});

  var file = fs.createReadStream('icon.png');
  file.pipe(response);
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
