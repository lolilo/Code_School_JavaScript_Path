// declare a SpeedTest class
function SpeedTest(testImplement, testParams, repetitions) {
	this.testImplement = testImplement; 
	this.testParams = testParams;
	this.repetitions = repetitions || 10000;
	this.average = 0;
}

// edit the SpeedTest prototype
SpeedTest.prototype = {
	startTest: function() {
		// beginTime and endTime will be assigned to date objects
		var beginTime, endTime, sumTimes = 0;
		for (var i = 0, x = this.repetitions; i < x; i++) {
			beginTime = +new Date(); // numerical version -- indicate by plus '+' unary operator
			// The unary + operator is the most useful when one needs to convert a string into a number
			this.testImplement(this.testParams);
			endTime = +new Date();
			sumTimes += endTime - beginTime;
		}
		this.average = sumTimes / this.repetitions;
		return console.log("Average execution across " +
			this.repetitions + ": " +
			this.average);
	}
}




var IP = ["Nipping Global Variable", "Sneaky Forin", "Bulging Blocking Script"],
GH = ["Switch Blocks", "Pesky Gnat", "Aiedra"],
inhabitants = [IP,GH];

function populationGetter(popn){
  var list = "";
  for(var i = 0, x = popn.length; i < x; i++){
    for(var j = 0; j < popn[i].length; j++){
      list += (popn[i][j] + ", ");
    }
  }
  return list;
}

populationGetter(inhabitants);

// ##########
populationGetterSpeedTest = new SpeedTest(populationGetter, inhabitants, 100000);
populationGetterSpeedTest.startTest();
var result = populationGetterSpeedTest.average;
console.log(result);
