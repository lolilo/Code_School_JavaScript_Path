// #########################
// overriding valueOf

var Tornado = function (category, affectedAreas, windGust) {
	this.category = category;
	this.affectedAreas = affectedAreas;
	this.windGust = windGust;
};

var cities = [ ["Kansas City", 43894], ["Topeka", 343245], ["Lenexa", 46727] ];
var twister = new Tornado("F5", cities, 220); 

Tornado.prototype.valueOf = function() {
	var sum = 0;
	for (var i = 0; i < this.affectedAreas.length; i++) {
		sum += this.affectedAreas[i][1];
	}
	return sum;
}

// console.log(twister.valueOf());

// #########################
// overriding toString

Tornado.prototype.toString = function () {
	var list = "";
	for (var i = 0; i < this.affectedAreas.length; i++) {
		if (i < this.affectedAreas.length - 1){
			list += this.affectedAreas[i][0] + ", ";
		} else {
			list += "and " + this.affectedAreas[i][0]; // special case for last affected area
		}
	}
	return "This tornado has been classified as an " + this.category +
	", with wind gusts up to " + this.windGust + "mph. Affected areas are: " +
	list + ", potentially affecting a population of " + this.valueOf() + ".";
}

// console.log(twister.toString());

// http://stackoverflow.com/questions/8393505/why-doesnt-the-node-console-display-the-function-code

// console.log("\n");
// console.log(twister.constructor());
// console.log(twister.constructor.toString());

// console.log(twister.constructor.prototype);
// console.log(twister.__proto__);


// #########################
// creating function to search prototype chains for potential overridden properties

Object.prototype.findOwnerOfProperty = function (propName) {
	var currentObject = this;
	// keep searching prototype chain until we've tried to go beyond the Object prototype
	while (currentObject !== null) {
		if (currentObject.hasOwnProperty(propName)) {
			return currentObject;
		} else {
			currentObject = currentObject.__proto__; // move up the prototype chain
		}
	}
	return "No property found!"; 
};

console.log("\n");
// console.log(twister.findOwnerOfProperty("valueOf"));
// console.log(twister.findOwnerOfProperty("windGust"));
// console.log(twister.findOwnerOfProperty("toString"));
console.log(twister.findOwnerOfProperty("hasOwnProperty"));

