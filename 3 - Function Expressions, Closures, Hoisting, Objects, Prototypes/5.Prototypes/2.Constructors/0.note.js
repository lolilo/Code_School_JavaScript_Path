// Object.create();
// Object.prototype.isPrototypeOf(); // returns a boolean

// A class is a set of Objects that all share and inherit from the same basic prototype.

// Capitalizing a function name indicates that the function defines a Class / is a "constructor."
function Shoe (shoeSize, shoeColor) {
	this.size = shoeSize;
	this.color = shoeColor;
}

// Assign a prototype to a constructor.
// Each time we instantiate an object, the new object will refer to a 
// constructor's prototype property.

// can refer back to its own instantiation variables
Shoe.prototype = {
	putOn: function () { alert ("Shoe's on! They are size: " + this.size +"."); },
	takeOff: function () { alert ("Shoe's are off!"); }
};



// #############################
