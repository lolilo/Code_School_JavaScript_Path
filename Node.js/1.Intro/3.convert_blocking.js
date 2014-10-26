// Convert Blocking
// 250Points
// Not everyone knows why it's important to write non-blocking programs in Node.js. One of these unfortunate souls has written some code to read a file off the file-system using the blocking function readFileSync. Convert the code to be non-blocking using the readFile function instead.
// Tip: the callback function takes two parameters, err and contents

var fs = require('fs');

var contents = fs.readFileSync('index.html');
console.log(contents);

// ######

var fs = require('fs');

fs.readFile('index.html', function(err, contents) {
	console.log(contents);
});

