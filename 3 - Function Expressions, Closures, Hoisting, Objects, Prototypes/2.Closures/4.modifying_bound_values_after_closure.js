// modify the warning functions to internally count 
// the number of times a particular obstacle has been encountered, 
// and then add that number of alerts to the message. 

function warningMaker( obstacle ){
  var count = 0;
  return function ( number, location ) {
    count++; 
    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "! \nThis is Alert #" + count + " today for " + obstacle + " danger."
         );
  };
}

