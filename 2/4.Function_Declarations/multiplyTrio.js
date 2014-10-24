function multiplyTrio(a, b, c) {
	return a * b * c;
}

function maxOf2 (a, b) {
	if (a>b){
		return a;
	} else {
		return b;
	}
}


function mystery (x, y) {
  var a = 4*x*y;
  var b = 3*y + 5;
  var c = a + b;
  return 4*x*y + (3*y + 5)
}

// global and local scope talk
// always declare variables properly! var x. use that 'var' keyword
// don't have leaky functions!


function feedPerRanger(sheepPopulation, parkRangersAvailable) {
	var num = sheepPopulation * 2 / parkRangersAvailable;
	alert("Each Park Ranger should load " + num + " lb(s) of feed into his/her BART today.");
}

function changePowerTotal(totalCurrentPowerGenerated, generatorID, genStatus, genPowerProduced) {
	
	if (genStatus=="on") {
		totalCurrentPowerGenerated += genPowerProduced;
		alert("Generator #" + generatorID + " is now on, adding " + genPowerProduced + "MW, for a total of " + totalCurrentPowerGenerated + " MW!");
	} else {
		totalCurrentPowerGenerated -= genPowerProduced;
		alert("Generator #" + generatorID + " is now off, removing " + genPowerProduced + "MW, for a total of " + totalCurrentPowerGenerated + " MW!");
	}
	return totalCurrentPowerGenerated;
}



