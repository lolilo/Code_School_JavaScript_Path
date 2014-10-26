function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];

  this.sendRopeTo = function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  };

  this.removeRope = function ( removeTo ){
  var temp = [];
  for(var i = 0; i<this.connectionsTo.length; i++){
     if(this.connectionsTo[i].postNum != removeTo){
       temp.push(this.connectionsTo[i]);
     }
  }
    this.connectionsTo = temp;
  }

  this.movePost = function (x, y){
    this.x = x;
    this.y = y;
  };
}


Fencepost.prototype = {
  sendRopeTo : function (connectedPost) {
    this.connectionsTo.push(connectedPost);
  },

  removeRope : function ( removeTo ){
      var temp = [];
      for(var i = 0; i<this.connectionsTo.length; i++){
        if(this.connectionsTo[i].postNum != removeTo){
          temp.push(this.connectionsTo[i]);
       }
    }
      this.connectionsTo = temp;
  },

  movePost : function (x, y){
    this.x = x;
    this.y = y;
  }
}
