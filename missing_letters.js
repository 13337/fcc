//this is basically just diff two arrays
function fearNotLetter(str) {
  var charCodes = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
  
  var strChars = [];
  
  for (var i=0;i <str.length;i++){
    strChars.push(str.charCodeAt(i));
    
  }
  var compare = charCodes.slice(charCodes.indexOf(strChars[0]),strChars.length);
  var val = [];

  
  for (var j in compare) {
    if (strChars.indexOf(compare[j]) === -1) {
      val.push(String.fromCharCode(compare[j]));
    }
  }
 
  if (val.toString().length !== 0) {
    return val.toString();
  } else {
    return undefined;
  }
  
  //return compare;
}
fearNotLetter("abce");
