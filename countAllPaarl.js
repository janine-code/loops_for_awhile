const assert = require('assert');

var countAllPaarl = function(num) {
  var split = num.split(",");
  var arr = [];
  var arr2 = [];

  for (var i = 0; i < split.length; i++) {
    arr.push(split[i]);

    if (arr[i].startsWith("CJ")) {
      arr2.push(arr[i]);
    }
  }
  return arr2.length;

}

console.log(countAllPaarl("CA ry6ryu,CJ 886543,CJ 785333"));

assert.equal(countAllPaarl("CA ry6ryu,CJ 886543,CJ 785333"), 2)
