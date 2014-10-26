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


