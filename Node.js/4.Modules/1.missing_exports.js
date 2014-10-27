exports.highfive = function() {
  console.log("<smack!!>");
};

//###### in another file

var hf = require('./high_five');
hf.highfive();