function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}
Fencepost.prototype = {
  sendRopeTo: function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function ( removeTo ){
    var temp = [];
    for(var i = 0; i<this.connectionsTo.length; i++){
      if(this.connectionsTo[i].postNum != removeTo){
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function (x, y){
    this.x = x;
    this.y = y;
  },
  valueOf: function (){
  return Math.sqrt( this.x*this.x + this.y*this.y );
  }
};


Fencepost.prototype.valueOf = function() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}; 

// Fence post #10:
// Connected to posts:
// 11
// 12
// 13
// Distance from ranch: 5 yards

Fencepost.prototype.toString = function() {
	var list = '';

	for (var i = 0; i < this.connectionsTo.length; i++) {
		list += '\n' + this.connectionsTo[i].postNum;
	}

	return "Fence post #" + this.postNum + ":" + list +
	"\nDistance from ranch: " + this.valueOf() + " yards";
};

var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);

console.log(post18.connectionsTo);
console.log(post18.toString());
