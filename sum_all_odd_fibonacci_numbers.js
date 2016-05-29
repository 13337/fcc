// name of file is relatively self-explanatory.

function sumFibs(num) {

var fib = [0,1]; // Initialize array!
var sum = 0;

for(var i=fib.length; i<=500; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i-2] + fib[i-1];
    
  }
for (var j in fib) {
  if (fib[j] % 2 !== 0 && fib[j] <= num) {
    sum += fib[j];
  }
}

 return sum;
}

sumFibs(4);
