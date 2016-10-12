const assert = require('assert');

var firstPaarl = function(num){
  var splitRegNumber = num.split(",");
  var arr = [];
  var arr2 = [];

      for (var i=0; i < splitRegNumber.length; i++){
        arr.push(splitRegNumber[i]);

        if(arr[i].startsWith("CJ")){
          arr2.push(arr[i]);
        }
      }
var PaarlNo = arr2[0];

      return PaarlNo
}


assert.equal(firstPaarl('CA ry6ryu,CJ 886543,CA 785333'), 'CJ 886543');

console.log(firstPaarl("CA ry6ryu,CJ 886543,CA 785333"));
