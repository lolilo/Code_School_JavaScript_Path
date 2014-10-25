var superBlinders = [ ["Firelight", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  bulbs: [ 200, 500, 750 ],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;

var highestWattage = 0;
var bulbWithHighestWattage;
for (var i = 0; i < superBlinders.length; i++) {
	
	if (superBlinders[i][1] > highestWattage) {
		highestWattage = superBlinders[i][1];
		bulbWithHighestWattage = superBlinders[i][0];
	}
}

console.log(bulbWithHighestWattage);