function translate(str) {
  var vowels = ["a","e","i","o","u"];
  var lett = str.split('');
  var newLast = [];
  if (vowels.indexOf(str[0]) >= 0) {
    return str + "way";
  } else {
    while (vowels.indexOf(lett[0]) == -1) {
      newLast = lett.shift();
      lett.push(newLast);
  }
    return lett.join("") + "ay";

  }
}

translate("glove");
