// An Object contains multiple bits of data/information, and so it's often called a "composite value."

// Mutiple ways to build Objects. First, look at "Object literal."

var vehicle1 = {
	"type": "Moterboat",
	"capacity": 6, 
	"storedAt": "Ammunition Depot"
}

var vehicle2 = {
	"type": "Jet Ski",
	"capacity": 1, 
	"storedAt": "Reef Dock"
}


var vehicle3 = {
	"type": "Submarine",
	"capacity": 8, 
	"storedAt": "Underwater Outpost"
}

console.log(vehicle1.capacity);
console.log(vehicle1["capacity"]);
