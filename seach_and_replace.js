function myReplace(str, before, after) {
  var newAfter = after;
  if (before[0] == before[0].toUpperCase()) {
    newAfter = newAfter.replace(newAfter[0],after[0].toUpperCase());
  } 
  
  return str.replace(before,newAfter);
}
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
