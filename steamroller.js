// return a flattened array from while accounting for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattened = arr.toString().replace(',,',',').split(',');
  
  
  
  for (var i = 0; i < flattened.length; i++) {
    if (flattened[i] == "[object Object]") {
      flattened[i] = {};  
    } else if (Array.isArray(flattened[i])) {
      if (flattened[i].length === 0) {
        flattened.splice(i,1);
       
      }   
      
    }
  }
  
  
  for (var j = 0; j < flattened.length; j++) {
    if (!isNaN(flattened[j])) {
      flattened[j] = Number(flattened[j]);
    }
  }
  
  
  return flattened;
}
steamrollArray([1, {}, [3, [[4]]]]);
