function sansTemple(direction){
  var happensNext;
    if(direction == "right hallway") {
      happensNext = "You find a door, it is locked. You head back from where you came."
    } else if(direction == "left hallway") {
      happensNext = "You find a door, it is locked. You head back from where you came."
    } else if(direction == "forward hallway") {
      happensNext = "You find a door, it is locked. You head back from where you came."
    } else if(direction == "lower tunnel") {
      happensNext = "You find a door, it is locked. You head back from where you came."
    } else if(direction == "hidden door") {
      happensNext = "You go through the door into a room. A small, very dark room, that smells of dust and sulfur..."
    } else {
      happensNext = "You stand there, gaping, not moving. Aiedra wonders, are you alive?"
    }
  return happensNext;
}
sansTemple();


function sansTemple(direction){
  var happensNext;
  switch (direction) {
    case "right hallway" : 
        happensNext = "You find a door, it is locked. You head back from where you came."
        break;


    case "left hallway" :
      happensNext = "You find a door, it is locked. You head back from where you came."
      break; 

    case "forward hallway" :
      happensNext = "You find a door, it is locked. You head back from where you came."
      break; 

    case "lower tunnel" :
      happensNext = "You find a door, it is locked. You head back from where you came."
      break;

    case "hidden door" : 
      happensNext = "You go through the door into a room. A small, very dark room, that smells of dust and sulfur..."
      break; 

    default : 
      happensNext = "You stand there, gaping, not moving. Aiedra wonders, are you alive?"
      break; 

  return happensNext;

    }
}
sansTemple();


// ###########

function sansTemple(direction){
  var happensNext;
  switch(direction){
    case "right hallway" : happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
    case "left hallway" : happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
    case "forward hallway" : happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
    case "lower tunnel" : happensNext = "You find a door, it is locked. You head back from where you came.";
    break;
    case "hidden door" : happensNext = "You go through the door into a room. A small, very dark room, that smells of dust and sulfer...";
    break;
    default: happensNext = "You stand there, gaping, not moving. Aiedra wonders, are you alive?";
  }
  return happensNext;
}
sansTemple();

