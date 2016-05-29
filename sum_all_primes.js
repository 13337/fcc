// returns the sum of all primes up to and including the number supplied as an argument.

function sumPrimes(num) {
  var sieve = [];
  var primes = [];
      for (var i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
          var j;
          primes.push(i);
          for (j = i << 1; j <= num; j += i) {
              sieve[j] = true;
            }
        }
    }
  return primes.reduce(function(prev,curr) {return prev+curr;});

}

sumPrimes(10);
