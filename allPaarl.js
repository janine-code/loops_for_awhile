const assert = require('assert');

var firstPaarl = function(num) {
  var splitRegNum = num.split(",");
  var listRegNumbers = [];
  var listPaarlRegNumbers = [];
  for (var i = 0; i < splitRegNum.length; i++) {
    listRegNumbers.push(splitRegNum[i]);
    if (listRegNumbers[i].startsWith("CJ")) {
      listPaarlRegNumbers.push(listRegNumbers[i]);
    }
  }
  return listPaarlRegNumbers;
}

console.log(firstPaarl("CA ry6ryu,CJ 886543,CJ 785333"));
console.log(firstPaarl("CJ ry6ryu,CJ 886543,CJ 785333"));
assert.equal(firstPaarl("CA ry6ryu,CJ 886543,CA 785333"), "CJ 886543");
