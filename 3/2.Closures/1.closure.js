// building function factories

function testClosure() {
	var x = 4;
	function closeX() {
		return x;
	}
	return closeX; 
}

console.log(testClosure()());

// variable x is bound as a closure inside closeX 


var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery ( input ){
  var secret = 4;
  input+=2;
  function mystery2 ( multiplier ) { 
    multiplier *= input; // input = 5
    return secret * multiplier; // 4 * multiplier 
  }
  return mystery2;
}

// 30 * 4 = 120 

// 120 + bonus 


function mystery3 ( param ){
  function mystery4 ( bonus ){
    return param(6) + bonus;
  }
  return mystery4;
}

// ############

function warningMaker( obstacle ){
  return function () {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

var icebergAlert = warningMaker("iceberg");