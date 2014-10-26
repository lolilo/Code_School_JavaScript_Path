var isArthur = false;
var isKing = false;
var weapon; 

// if (isArthur) {
// 	weapon = "Excalibur";
// } else {
// 	weapon = "Longsoword";
// }

// ternary conditional -- a shortcut over lengthier conditional blocks

// someCondition ? pickThisIfTrue : pickThisIfFalse

var weapon = isArthur ? "Excalibur" : "Longsoword"; 
console.log("Current weapon: " + isArthur ? "Excalibur" : "Longsoword"); // gives Excalibur, because of truthy
// The "+" concatenation occurs before the "?" can evaluate anything, 
// so the "?" ends up evaluating "Current weapons: false" -- just a string, which is truthy. 


console.log("Current weapon: " + (isArthur ? "Excalibur" : "Longsoword"));

var isArthur = true;
var isKing = false;
console.log("Current weapon: " + (isArthur && isKing ? "Excalibur" : "Longsoword"));

// #########
var isHero = true;
var character; 

character = isHero ? "Dhuun" : "Pesky Gnat";

// ######### logical assignment ||  and && 
var armory = { 
	add Sword : function (sword) {
		this.swords = this.swords ? this.swords : [ ]; // create new property empty array if it did not already exist
		this.swords.push(sword);
	}
};


var armory = { 
	add Sword : function (sword) {
		this.swords = this.swords || [ ]; // create new property empty array if it did not already exist
		this.swords.push(sword);
	}
};


// ######### switch blocks
// switch keyword

// JS allows fall-through to other cases
// Can think of the case keyword and its value as just a label for an executable "starting point"

function Knight (name, regiment) {
	this.name = name;
	this.regiment = regiment;
	switch (regiment) {
		case 1: 
			this.weapon = "Broadsword";
		case 2: 
			this.weapon = "Claymore";
		case 3: 
			this.weapon = "Longsword";
		case 4: 
			this.weapon = "Morning Star"
	}
}

var soldier2 = new Knight("Richard", 2);
console.log(soldier2.weapon); // will assign "Morning Star"
// must use "break" keyword to leave entire block of code that contains it -- in this case, the switch

function Knight (name, regiment) {
	this.name = name;
	this.regiment = regiment;
	switch (regiment) {
		case 1: 
			this.weapon = "Broadsword";
			break;
		case 2: 
			this.weapon = "Claymore";
			break;
		case 3: 
			this.weapon = "Longsword";
			break;
		case 4: 
			this.weapon = "Morning Star"
			break;
	}
}

var soldier2 = new Knight("Richard", 2);
console.log(soldier2.weapon); // will assign "Claymore" 


// why use fall through at all? 
function Knight (name, regiment) {
	this.name = name;
	this.regiment = regiment;
	switch (regiment) {
		case 1: 
			this.weapon = "Broadsword";
			break;
		case 2: 
		case 3: 
		case 4: //  have cases 2 - 4 have the same result
			this.weapon = "Morning Star"
			break;
	}
}

function Knight (name, regiment) {
	this.name = name;
	this.regiment = regiment;
	switch (regiment) {
		case 2: 
			this.weapon = "Broadsword";
			break;
		case 2: 
		case 1: // this is also valid. cases 2, 1, 4 will fall through to case 4.
		case 4: 
			this.weapon = "Morning Star"
			break;

		case "King":
			this.weapon = "Excalibur";
			break;

		default: // default case
			alert(name + " has an incorrect regiment. No weapon assigned.");
	}
}

// fall-though also allows for hierarchical code execution

