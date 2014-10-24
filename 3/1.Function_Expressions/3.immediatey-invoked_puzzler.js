var puzzlers = [
  function ( a ) { return 8*a - 10; }, 
  function ( a ) { return (a-3) * (a-3) * (a-3); }, 
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];

"What is obtained when the result of passing 9 into function 4\
is then passed into the function whose array index \
matches the result of passing 3 into function 2?"

console.log('yoyoy' + puzzlers[1](3));
console.log('yoyoy' + puzzlers[3](9));

console.log(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));
// okay...I don't know where to put semicolons


