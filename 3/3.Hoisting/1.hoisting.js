// load order

/*
...I never encountered these hoisting issues before because 
I don't declare my variables and functions in this random order(???) 
Always functions at the beginning, then variables and executions and such afterward... pseudo-functional programming style. 

From these hoisting talks, I am learning more about JavaScript's compiler, though. 
First, hoist up those declared vars to the top of the scope 
and allocate memory for them, also hoist up function declarations...
then all the executables run. 
*/


function theBridgeOfHoistingDoom () {
  function balrog(){
    return "fire";
  }
  var ring;
  function elf(){
    return "pointy ears";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
  function balrog(){
    return "whip";
  }
  function wizard(){
    return "white";
  }
  var power = ring();
  return elf();
  function elf(){
    return "immortal";
  }
}
