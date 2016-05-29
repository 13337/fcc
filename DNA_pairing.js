function pair(str) {
  var strArr = [];
  for (var i in str) {
    if (str[i] == "C") {
      strArr.push(["C","G"]);
    } else if (str[i] == "G") {
      strArr.push(["G","C"]);
    } else if (str[i] == "A") {
      strArr.push(["A","T"]);
    } else if (str[i] == "T") {
      strArr.push(["T","A"]);
    }
  }
  return strArr;
  
}

pair("GCG");

