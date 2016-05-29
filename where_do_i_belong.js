function where(arr, num) {
  // Find my place in this sorted array.
  var newArr = arr;
  newArr.push(num);
  newArr.sort(function(a,b) {
      return a-b;                        
  });
  return newArr.indexOf(num);
}
where([2, 20, 10], 1);
