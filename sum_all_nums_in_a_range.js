function sumAll(arr) {
  'esversion:6';
  'use strict';
  var count = 0;
  for (var i = Math.min(...arr);i<=Math.max(...arr);i++) {
  count += i;  
  }
  return count;
}

sumAll([1, 4]);

