function assignLaser( shark, sharkList ){
  for(var i = 0; i<sharkList.length; i++){
    if(shark == sharkList[i]){
      return function(){
        alert("Yo, " +
              shark +
              "!\n" +
              "Visit underwater strapping station " +
              i +
              " for your sweet laser.\n" +
              "'Bout to get real up in here."
             );
      };
    }
  }
}
