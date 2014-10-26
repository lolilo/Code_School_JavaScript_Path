// File Read Stream
// 250Points
// Use the fs module to create a ReadableStream (use fs.createReadStream) to read in the index.html and then attach a callback to the 'data' event. Inside the callback, log out the contents of the file.
// Tip: Don't forget to call toString() on the data chunks inside the callback.

var fs = require('fs'); // filesystem module

var file = fs.createReadStream("index.html"); // returns a read stream

file.on('data', function(chunk) {
  console.log(chunk.toString());
});


