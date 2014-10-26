var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];


Object.prototype.noCalvesYet = function () {
	// console.log("\n" + this.hadCalf);
	if (this.hadCalf == null) {
		return true;
	} 
	return false;
};

Array.prototype.countForBreeding = function () {
	var numToBreed = 0;
	var item;

	for (var i = 0; i < this.length; i++) {
		// console.log(this[i]);
		item = this[i];
		if (item.type == "cow" && item.noCalvesYet()) {
			// console.log(this[i].name + " has not had calves.");
			numToBreed++;
		}
	}

	return numToBreed;
};



// Object.prototype.noCalvesYet = function () {
//     return (this.type === 'cow' && !this.hadCalf);
// };

// Array.prototype.countForBreeding = function () {
//     var numToBreed = 0;
//     for (var i = 0; i < this.length; i++) {
//         if (this[i].noCalvesYet()) numToBreed++;
//     }
//     return numToBreed;
// };


// console.log(forestCows[1].noCalvesYet());
console.log(forestCows.countForBreeding());
