//probably should have done this with a switch statement but whatever...
function convert(str) {
  // &colon;&rpar;
  var blah = str;
  for (var i = 0;i <blah.length;i++) {
    if (blah.charAt(i) === "&") {
      blah = blah.replace("&", "&amp;");
    } else if (blah.charAt(i) === "<") {
      blah = blah.replace("<","&lt;");
    } else if (blah.charAt(i) === ">") {
      blah = blah.replace(">", "&gt;");
    } else if (blah.charAt(i) === '"') {
      blah = blah.replace('"',"&quot;");
    } else if (blah.charAt(i) === "'") {
      blah = blah.replace("'","&apos;")
    }
  }
   return blah;
}


convert("Dolce & Gabbana");
