function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  
 for (var i in str) {
   if (str[i] === " ") {
     newStr += " ";
   } else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
     newStr += String.fromCharCode(str.charCodeAt(i)+13);
   } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
     newStr += String.fromCharCode(str.charCodeAt(i)-13);
   } else {
     newStr += String.fromCharCode(str.charCodeAt(i));
   }
 }
   return newStr;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
