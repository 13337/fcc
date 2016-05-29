// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether(x) {
  for (var iz in arguments) {
   if (Array.isArray(arguments[iz]) || typeof(arguments[iz]) === "string") {
        return undefined;
      } 
   }
  
  if (arguments.length > 1) {
    for (var i=0;i < arguments.length;i++) {
      return arguments[i] + arguments[i+1];
      }
    }

   
  
   
   
   
   
    return function(y) {
      
        if (Array.isArray(y) ||  typeof(y) === "string") {
          return undefined;
        } 
     
     return x + y;
    };
  
  
}

addTogether(2,"3");

