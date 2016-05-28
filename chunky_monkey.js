function chunk(arr, size) {
  // Break it up.
  var newArr = [];
  var count = 0;
  var fuck = arr.length;
  
  while (count < fuck) {
      newArr.push(arr.slice(count, count += size));
  }
  return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);

