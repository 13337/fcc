// This function looks through an array and returns the first element that passes a "truth test," supplied as the second argument.

function findElement(arr, func) {
  'esversion:6';  
  var num = 0;

  var truthFinder = func;
  
  return arr.filter(truthFinder)[0];
  
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

