alert(eightiesMovies[0][0] + ' ' + eightiesMovies[0][1]);




function numStrings(list) {
	var numOfStrings = 0;
	for (var i=0; i<list.length; i++){
		if (typeof(list[i]) == typeof('str')) {
			numOfStrings += 1;
		} 
	}
	return numOfStrings
}


