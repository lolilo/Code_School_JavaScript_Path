var totalGen = 19;
var totalMW = 0;

for (i=1; i<20; i++){
	if (i<5 && i%2==0) {
		totalMW += 62;
		console.log("Generator #" + i + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
	} else if (i>4 && i%2==0) {
		totalMW += 124;
		console.log("Generator #" + i + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
	} else {
		console.log("The Generator is off");
	}
}
