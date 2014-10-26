// IIFE - immediately invoked function


CAVESOFCLARITY = (function (alias) {

}) (CALVESOFCLARITY); // pass in old module to modifying IIFE,
// result will get assigned to the place where the old module was


CAVESOFCLARITY = (function (message) {
	var sandScript = '';
  	message.setSandScript = function (message) { // add as property to old namespace
    	sandScript = message;
  	};
  	return message; // return modified module
})(CAVESOFCLARITY); 
