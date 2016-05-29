// check if the second argument is truthy on all elements in the collection passed as the first argument

function truthCheck(collection, pre) {
  // Is everyone being true?
  var truthArr = [];
  
  for (var i = 0;i < collection.length;i++) {
       if (collection[i][pre]) {
        truthArr.push(true);
      } else if (!collection[i][pre] || collection[i][pre] === null || collection[i][pre] === undefined || isNaN(collection[i][pre]) === true) {
        truthArr.push(false);
    
      }
    }
    
  if (truthArr.indexOf(false) == -1) {
    return true;
  } else {
    return false;
  }
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
