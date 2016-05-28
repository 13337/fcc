function destroyer(arr) {
  var myArr = [];
  for (var i = 1; i < arguments.length; i++) {
     myArr.push(arguments[i]);
  }
  var notDestroyed = arguments[0].filter(function (element, index) {
    var toReturn = true;
    for (var i = 0; i < myArr.length; i++) {
    if (element === myArr[i]) {
      toReturn = false;
          }
        }
      return toReturn;
    });
  return notDestroyed;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

