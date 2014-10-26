// Fixing Pipe
// 250Points
// The following code will not work, '--File Complete--' will never get printed because pipe automatically closed our process.stdout WritableStream.
// You'll need to consult the pipe documentation to figure out the pipe option which keeps the WriteStream open and dispatches the end event.

var fs = require('fs');
var file = fs.createReadStream('index.html');

file.pipe(process.stdout, { end: false });

file.on("end", function() {
  console.log('--File Complete--');
});
