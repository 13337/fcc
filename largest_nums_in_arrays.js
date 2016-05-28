function largestOfFour(arr) {
  // You can do this!
  for (a = 0; a < arr.length;a++){
    var newArr = arr[a].sort(function(a,b) {
      return b - a;
    }
  );
  }
  var newArrTwo = [];
  newArrTwo.splice(0,0,arr[0][0],arr[1][0],arr[2][0],arr[3][0]);
    return newArrTwo;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

