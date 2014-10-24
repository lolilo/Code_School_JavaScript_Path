var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];


var modifiedNames = passengers.map(function (i) {
	return i[0] + ' ' + i[1];
});

// console.log(modifiedNames);

modifiedNames.map(function (name) {
	alert("Yo, " + name + "!");
});
// I don't like this code...using mapping for side-effects. 

var puzzlers = [
	function (input) {
		return 3 * input - 8;
	}, 

	function (input) {
		return Math.pow(2 + input, 3);
	}, 

	function(input) {
		return Math.pow(input, 2) - 9;
	},

	function (input) {
		return input % 4;
	}

];

