function truncate(str, num) {
  // Clear out that junk in your trunk
  var str2 = str.slice(0,(num));
  if (num >= str.length) {
    return str;
  } else {
  var spaceIndex = str2.indexOf(' ');
  var newStr = str2.slice(0,spaceIndex);
    return newStr+"...";
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
