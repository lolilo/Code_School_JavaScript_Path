var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

function relieveDuty(vehicle, day) {
	var onDuty = [];
	var offDuty = [];
	var currentRanger;
	for (var i = 0; i < vehicle.numRangers; i++){
		currentRanger = "ranger" + (i+1);
		if (vehicle[currentRanger].dayOff == day) {
			offDuty.push(currentRanger);
		} else {
			onDuty.push(currentRanger);
		}
		delete vehicle[currentRanger];
	}

	// add back onDuty rangers
	vehicle.numRangers = 0;
	for (var i = 0; i < onDuty.length; i++) {
		currentRanger = "ranger" + (i+1);
		vehicle[currentRanger] = onDuty[i];
		vehicle.numRangers++; 
	}

	vehicle.numRangers = onDuty.length;
	return offDuty;
}

var offToday = relieveDuty(vehicle3, "Friday");
console.log(offToday);