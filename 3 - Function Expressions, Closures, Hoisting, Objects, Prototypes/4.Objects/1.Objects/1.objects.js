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

// console.log(vehicle1.capacity);
// console.log(vehicle1["capacity"]);

var vehicles = [vehicle1, vehicle2, vehicle3];

var findVehicle = function (name, list) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].type == name) {
			return list[i].storedAt;
		}
	}
}

findVehicle("Submarine", vehicles);
