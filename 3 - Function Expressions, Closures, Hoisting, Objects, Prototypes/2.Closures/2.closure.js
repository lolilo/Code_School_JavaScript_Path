function warningMaker( obstacle ){
  return function (number, location) {
    console.log("Beware! There have been " + obstacle + " sightings in the Cove today!\n" 
    	+ number + " " + obstacle + "(s) spotted at the " + location + "!");
  };
}

warningMaker("Pokemon")(24, "Kanto");

