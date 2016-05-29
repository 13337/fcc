// judging by the name of this function, it must return the smallest common multiple of two numbers. Looking at the code, however, I think I'm beginning to understand why I should comment my code.

function smallestCommons(arr) {
  
  var biggest,smallest;
  
  if (arguments[0][0] > arguments[0][1]) {
    biggest = arguments[0][0];
    smallest = arguments[0][1];

  } else {
    biggest = arguments[0][1];
    smallest = arguments[0][0];
  }
  
  function range(start, stop, step) {
    if (stop === null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  }
  
  var rangeArr = range(smallest,biggest+1);
  
  var count = 0;
  
  for (var j = biggest; j <= 10000000; j+=biggest) {
    for (var k = smallest; k <= biggest; k++) {
       if (j % k === 0) { 
        count++; 
      }
    }
    if (count === rangeArr.length) { 
      return j; 
    }
    else{
      count = 0; 
    }
  }
}  

 

smallestCommons([1,13]);
