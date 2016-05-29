function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var rx = /[a-z][A-Z]/g.exec(str);
  for (var i = 0; i <= str.length; i++) {
    if (str.charAt(i) === " ") {
      str = str.replace(" ","-");
    } else if (str.charAt(i) === "_") {
      str = str.replace("_","-");
    } 
  }
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  str = str.toLowerCase();
  return str;
}

spinalCase('thisIsSpinalTap');
