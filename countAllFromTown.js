const assert = require('assert');

var countAllFromTown = function(num){
  var split = num.split(",");
  var arr = [];
  var arr2 = [];

      for (var i=0; i < split.length; i++){
        arr.push(split[i]);

        if(arr[i].startsWith("CA")){
          arr2.push(arr[i]);

        }
  else{"no reg number from this town";}

}
  return arr2.length;
}

console.log(countAllFromTown("CA ry6ryu,CJ 886543,CJ 785333"));

assert.deepEqual(allFromTown("CA ry6ryu,CJ 886543,CJ 785333"), ["CA ry6ryu"]);
