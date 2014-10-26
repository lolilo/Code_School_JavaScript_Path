// Solving Backpressure
// 250Points
// Even though we know pipe does all the heavy lifting for us when dealing with backpressure, it's still a good idea for us to know about what is going on. Below, we are copying a file using Readable and Writeable streams.
// Update the code to account for backpressure, without using pipe.


var fs = require('fs');

var file = fs.createReadStream("icon.png"); // read stream
var newFile = fs.createWriteStream("icon-new.png"); // write stream

// read stream data
file.on('data', function(chunk) {
  var buffer_good = newFile.write(chunk); // returns true if kernel buffer is full
  if (!buffer_good) {
  	file.pause();
  }
});

// listen for 'drain' on write stream
newFile.on('drain', function() {
  file.resume(); // resume read stream
});

file.on('end', function() {
  newFile.end();
});
