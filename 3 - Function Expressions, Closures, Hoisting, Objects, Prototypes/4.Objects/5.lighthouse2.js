var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};



// takes in a location object
// outputs and alert in the form
// Avast, me hearties!
// There be Pirates nearby! Stations!
// <name>, man the <superblinder>!
// <name>, man the <superblinder>!
// <name>, man the <superblinder>!

function dontPanic(location) {

	alertString = "Avast, me hearties!\n\
		There be Pirates nearby! Stations!"

	for (var i = 0; i < location.numRangers; i++) {
		currentRanger = location["ranger" + (i+1)];
		superBlindersIndex = currentRanger["station"] - 1;
		alertString += "\n" + currentRanger.name + ", man the " + superBlinders[superBlindersIndex][0] + "!";
	}

	console.log(alertString);
}

dontPanic(lighthouseRock);