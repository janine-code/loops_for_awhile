const assert = require('assert');

/*display all*/
var list = [];
var displayEachRegNumber = function(num){
  for (var i=0; i<num.length; i++){
    console.log(num[i]);
    list.push(num[i]);

}
return list;
}
// displayEachRegNumber(["CA ry6ryu", "CJ 886543", "CA 785333"]);

assert.deepEqual(displayEachRegNumber(["CA ry6ryu", "CJ 886543", "CA 785333"]), ["CA ry6ryu", "CJ 886543", "CA 785333");



/*first one only

var firstPaarl = function(){var regNo = ["CJ 567", "CJ 555", "CJ 663"];
var splitRegNo = regNo.split();
var chooseCJ= splitRegNo.startsWith("CJ");
for(var i = 0; )
}
*/
