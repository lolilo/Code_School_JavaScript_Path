var CAVESOFCLARITY = {

   stalactites : 4235,
   stalagmites : 3924,
   bats : 345,
   treasureChests : 3,

   openChest : function() {
   	this.treasureChests--;
   	alert("DA DADADA DAAAAAAA!");	
	}
};

// ### nested container

var CAVESOFCLARITY = {
  stalactites: 4235,
  stalagmites: 3924,
  bats: 345,
  SECRET : {
  treasureChests: 3,
  openChest: function() {
    this.treasureChests--;
    alert("DA DADADA DAAAAAAA!");
  }
}
};
