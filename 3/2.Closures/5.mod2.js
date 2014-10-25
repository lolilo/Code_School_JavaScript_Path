function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    count++;
    zones.push(location); 

    var zonesAsString = '';
    for (var i=0; i<zones.length; i++) {
        zonesAsString += "\n" + zones[i];
    }

    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\nCurrent danger zones are:" + 
          zonesAsString
         );
  };
}
