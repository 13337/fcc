// IIRC, this returns an array sorted by original order with all duplicates removed.

 function uniteUnique(arr1, arr2, arr3) {

   var newArgs = arguments;
  
   var flattened = Array.from(newArgs).reduce(function(a, b) {
      return a.concat(b);}, []);
  
  return Array.from(new Set(flattened));
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

