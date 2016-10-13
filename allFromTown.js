const assert = require('assert');

var allFromTown = function(num) {
  var splitRegNo = num.split(",");
  var listRegNumbers = [];
  var listTownRegNumbers = [];
  for (var i = 0; i < splitRegNo.length; i++) {
    listRegNumbers.push(splitRegNo[i]);
    if (listRegNumbers[i].startsWith("CA")) {
      listTownRegNumbers.push(listRegNumbers[i]);
    }
  }
  return listTownRegNumbers;
}

console.log(allFromTown("CA ry6ryu,CJ 886543,CJ 785333"));
console.log(allFromTown("CJ ry6ryu,CJ 886543,CJ 785333"));
assert.deepEqual(allFromTown("CA ry6ryu,CJ 886543,CJ 785333"), ["CA ry6ryu"]);
