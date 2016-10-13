const assert = require('assert');

var countAllFromTown = function(num) {
  var splitNum = num.split(",");
  var arrNum = [];
  var arrNumbersForCA = [];
  for (var i = 0; i < splitNum.length; i++) {
    arrNum.push(splitNum[i]);
    if (arrNum[i].startsWith("CA")) {
      arrNumbersForCA.push(arrNum[i]);
    } else {
      "no reg number from this town";
    }
  }
  return arrNumbersForCA.length;
}

console.log(countAllFromTown("CA ry6ryu,CJ 886543,CJ 785333"));
console.log(countAllFromTown("CJ ry6ryu,CJ 886543,CJ 785333"));
assert.equal(countAllFromTown("CA ry6ryu,CJ 886543,CJ 785333"), 1);
