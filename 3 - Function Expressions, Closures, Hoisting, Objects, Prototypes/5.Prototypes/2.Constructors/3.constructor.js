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
