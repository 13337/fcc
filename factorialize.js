function factorialize(num) {
  var b = 1;
  
  for (var i = 2; i <= num; i++) {
    b = b * i;
  }
    return b;

}

factorialize(5);
