// http://courseware.codeschool.com/javascript-roadtrip/js3.pdf

var genericPost =
  {x: 0, y: 0, postNum: undefined,
   connectionsTo: undefined,
   sendRopeTo: function ( connectedPost ) {
     if(this.connectionsTo == undefined){
       var postArray = [ ];
       postArray.push(connectedPost);
       this.connectionsTo = postArray;
     } else {
       this.connectionsTo.push(connectedPost);
     }
   }
  };


function Fencepost(x, y, postNum) {
	this.x = x;
	this.y = y;
	this.postNum = postNum;
	this.connectionsTo = [];
	this.sendRopeTo = function(connectedPost) {
		this.connectionsTo.push(connectedPost);
	};
}

// var post18, post19, post20;
// post18 = new Fencepost(-3, 4, 18);
// post19 = new Fencepost(5, -1, 19);
// post20 = new Fencepost(-2, 10, 20);

// Code School's compiler, yo. 
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);

post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);

