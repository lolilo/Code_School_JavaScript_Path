var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"},

  listGuns: function () {
	for (var property in this) {
		// console.log(property);
		if (property.heft != undefined) {
			console.log("Behold! " + property + ", with " + rockSpearguns[propety].heft + " heft!");
		}
	}
}

};

// function listGuns(guns) {
// 	for (var speargun in rockSpearguns) {
// 		console.log("Behold! " + speargun + ", with " + rockSpearguns[speargun].heft + " heft!");
// 	}
// }

// listGuns(rockSpearguns);

rockSpearguns.listGuns();
