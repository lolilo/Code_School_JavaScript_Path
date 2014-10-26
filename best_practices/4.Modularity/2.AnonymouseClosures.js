var CAVESOFCLARITY = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  SECRET: {
    treasureChests: 3,
    openChest: function(){
      this.treasureChests--;
      alert("DA DADADA DAAAAAAA!");
    }
  }
};

// In order to make treasureChests private, 
// convert CAVESOFCLARITY into an anonymous closure 
// that returns an object with the original data.


var CAVESOFCLARITY = (function(){
  
  var treasureChests = 3;
  
  return {
    stalactites: 4235,
    stalagmites: 3924,
    bats: 345,
    
    SECRET: {
      openChest: function(){
        treasureChests--;
        alert("DA DADADA DAAAAAAA!");
      }
    }
  };
})();


// "To ensure that the number of bats is referenceable, 
// build a public method called getBats that returns the private data. 
// From your good work, the amount of bats will be retrievable, 
// but the quantity will endure for the ages."

var CAVESOFCLARITY = function () {
          
  var treasureChests = 3;
  var bats = 345;

  return {
    stalactites: 4235,
    stalagmites: 3924,
    SECRET: {
      openChest: function(){
        treasureChests--;
        alert("DA DADADA DAAAAAAA!");
      }
    }, 
    getBats : function() {
      return bats;
    }
  };
}();


