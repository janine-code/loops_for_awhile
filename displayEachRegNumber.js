const assert = require('assert');

/*display all*/
var displayEachRegNumber = function(num) {
  var strSplit = num.split(",");
  var listRegNumbers = [];
  for (var i = 0; i < strSplit.length; i++) {
    listRegNumbers.push(strSplit[i]);
  }
  return listRegNumbers;
}
console.log(displayEachRegNumber("CA ry6ryu,CJ 886543,CA 785333"));
console.log(displayEachRegNumber("CJ 888899,CJ 8899943,CA 785333"));
assert.deepEqual(displayEachRegNumber("CA ry6ryu,CJ 886543,CA 785333"), ["CA ry6ryu", "CJ 886543", "CA 785333"]);

/*first one only

var firstPaarl = function(){var regNo = ["CJ 567", "CJ 555", "CJ 663"];
var splitRegNo = regNo.split();
var chooseCJ= splitRegNo.startsWith("CJ");
for(var i = 0; )
}
*/

/*const assert = require('assert');

var regNo = [];

var firstPaarl = function(num){
      for (var i=0; i<num.length; i++){
        var isPaarlNo = num[i].startsWith("CJ");
        if(isPaarlNo){
          if(isPaarlNo==="CJ"){

          }
          console.log(num[i]);
           regNo.push(num[i]);
        }
        else{"no Paarl registration exists";
        }
      }
return regNo;
}
// firstPaarl(["CA ry6ryu", "CJ 886543", "CA 785333"]);

assert.deepEqual(firstPaarl(["CA ry6ryu", "CJ 886543", "CA 785333"]),["CJ 886543"]);*/
