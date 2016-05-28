function palindrome(str) {
  // Good luck!
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  var strReverse = str.split('').reverse().join('');
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
}


palindrome("eye");
