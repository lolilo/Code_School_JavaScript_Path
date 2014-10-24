var people = 12;
var rain = 4;
var sharks = 5;
var fearGenerated = function ( numPeeps, rainInInches, numSharks){
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

var fear = fearGenerated(people, rain, sharks);
console.log(fear);


// ##########################################

var fear = fearGenerated(numPeeps, rainInInches, numSharks);
var fearMessage;

fearMessage = function(fear){
	if (fear < 200) { 
		return "Fear Level: LOW\
		Should be no problem at all...mwahaha.\
		Still wanna ride?";
	}

	if (200 < fear <= 300) {
		return "Fear Level: MEDIUM\
		You may want to rethink this one. MWAHAHA!\
		Think you'll make it?";
	}

	if (300 < fear <= 400) {
		return "Fear Level: HIGH \
		ABANDON ALL HOPE!! \
		Have a death wish?";
	}
}

var startRide = confirmRide(fearMessage);

function confirmRide( confirmToGo ){
  return confirmToGo();
}



