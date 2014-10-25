var puzzlers = [
  function ( a ) { return 8*a - 10; },
  function ( a ) { return (a-3) * (a-3) * (a-3); },
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var start = 2;


var applyAndEmpty = function(num, queue) {
	var result = num;
	var current_function;
	for (var i; i<=num; i++) {
		current_function = queue.shift();
		result = current_function(result);
	}
	return result;
};

alert(applyAndEmpty(start, puzzlers));
