var userAge;
var ageIsCorrect = false;

while (!ageIsCorrect) {
	userAge = prompt("What's your age user?");
	ageIsCorrect = confirm("You are " + userAge + "?");
}

alert("Great! Your age is logged as " + userAge + ".");