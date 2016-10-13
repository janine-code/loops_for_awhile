const assert = require('assert');

var countAllPaarl = function(num) {
  var splitRegNo = num.split(",");
  var arrNumbers = [];
  var arrNumbersForCJ = [];
  for (var i = 0; i < splitRegNo.length; i++) {
    arrNumbers.push(splitRegNo[i]);
    if (arrNumbers[i].startsWith("CJ")) {
      arrNumbersForCJ.push(arrNumbers[i]);
    }
  }
  return arrNumbersForCJ.length;
}

console.log(countAllPaarl("CJ ry6ryu,CJ 886543,CJ 785333"));
console.log(countAllPaarl("CA ry6ryu,CJ 886543,CJ 785333"));
assert.equal(countAllPaarl("CA ry6ryu,CJ 886543,CJ 785333"), 2)
