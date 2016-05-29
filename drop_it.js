// drop the elements of an array(starting from the front) until the second argument returns true.

 function dropElements(arr, func) {
  // Drop them elements.
   var lol = false;
   for (var i = 0; i < arr.length; i++) {
    while (lol === false) {
     if (func(arr[i]) === false) {
     arr.shift(i);  
     } else {
       lol = true;
       return arr;
     }
    }
   }
   return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1; });

