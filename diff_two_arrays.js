function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (var i in arr1) {
    if (arr2.indexOf(arr1[i]) == -1) {
      newArr = newArr.concat(arr1[i]);
    }
  }
  for (var j in arr2) {
    if(arr1.indexOf(arr2[j]) == -1) {
       newArr = newArr.concat(arr2[j]);
       }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

