var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 0, 

  // don't have location passed in if this function is attached to the location in question -- for next time! 
  // I went ahead of the Code School lesson here. 
  addRanger: function (location, name, skillz, station) {
  	lighthouseRock.numRangers++;
  	location["ranger" + lighthouseRock.numRangers] = {
  		"name": name,
  		"skillz": skillz, 
  		"station": station
  	};
  }
};

lighthouseRock.addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
lighthouseRock.addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
lighthouseRock.addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);


// declared function version

function addRanger(location, name, skillz, station){
  location.numRangers++;
  location["ranger" + location.numRangers] = {
    name: name, 
    skillz: skillz, 
    station: station 
  }; 
}

// console.log(lighthouseRock.ranger1);