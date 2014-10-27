// Exporting an object
// 250Points
// The app.js code on the right side would not work. Once again we forgot to export our methods. In the logger.js file, export the info, warn, and error functions so we can use them in the app.js by assigning them to the exports object.


var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};

exports.warn = warn;
exports.info = info;
exports.error = error;
