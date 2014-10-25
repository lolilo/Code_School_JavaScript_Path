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



// rewrite the following function in the order that its statements would be interpreted by a JavaScript interpreter, with some special rules for evaluation:

// All declared variables are first manually initialized to an undefined value and come first in the load order.
// All loaded functions that end up being overwritten by other functions with the same name will just disappear from their current place in the load order (and will not be seen in your answer).
// Declared functions that end up replacing other functions, however, will NOT take the order place of the previous version, but instead will just fall into the load order behind existing loaded functions.
// All unreachable executable code that follows a return statement (where the function ends) will disappear from your answer.

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

// Well, I think this was a silly exercise.
function theBridgeOfHoistingDoom () {
  var ring = undefined;
  var power = undefined;
  function balrog(){
    return "whip";
  }
  function wizard(){
    return "white";
  }
  function elf(){
    return "immortal";
  }
  ring = wizard;
  wizard = balrog;
  return wizard();
}