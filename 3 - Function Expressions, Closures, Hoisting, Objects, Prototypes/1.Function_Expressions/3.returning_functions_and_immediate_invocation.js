
// return a function
function adventureSelector ( userChoice ){

	if (userChoice == 1) {
		return function () {
			alert("You've selected the Vines of Doom!\nHope you have a swingin' time.");
		};
	}

	if (userChoice == 2) {
		return function () {
			alert("Looks like you want the Lake of Despair!\nWatch out for crocs. And I ain't talkin' about shoes.");
		};
	}

	if (userChoice == 3) {
		return function () {
			alert("The Caves of Catastrophe, really?\nAlright, well....nice knowing you.");
		};
	}
}



