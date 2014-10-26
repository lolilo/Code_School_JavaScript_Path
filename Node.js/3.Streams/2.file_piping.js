// File Piping

// Instead of manually listening for the data event on the ReadableStream, 
// let's use the pipe function to write directly to process.stdout 
// (all console.log does is call process.stdout.write)


var fs = require('fs');
var file = fs.createReadStream('index.html');

file.pipe(process.stdout);