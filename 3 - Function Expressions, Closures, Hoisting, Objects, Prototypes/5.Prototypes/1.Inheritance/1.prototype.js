var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

// Array.prototype.countCattle = function (parameter) {
// 	var count = 0;
// 	for (var item in this) {
// 		count++;
// 		console.log(item); // this counts the countCattle function we just added
// 	}
// 	return count; 
// }
  

Array.prototype.countCattle = function (parameter) {
	var count = 0;
	for (var i = 0; i < this.length; i++) {
		if (this[i].type == parameter){
			count++;
		}
	}
	return count; 
}
  
console.log(canyonCows.countCattle("cow"));

alert(canyonCows.countCattle("calf") + valleyCows.countCattle("bull") + forestCows.countCattle("cow"));
