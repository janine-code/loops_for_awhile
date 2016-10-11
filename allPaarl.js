const assert = require('assert');

var firstPaarl = function(num){
  var split = num.split(",");
  var arr = [];
  var arr2 = [];

      for (var i=0; i < split.length; i++){
        arr.push(split[i]);

        if(arr[i].startsWith("CJ")){
          arr2.push(arr[i]);
        }
      }

      console.log(arr2);

}

firstPaarl("CA ry6ryu,CJ 886543,CJ 785333");

//assert.equal(firstPaarl(["CA ry6ryu", "CJ 886543", "CA 785333"]),["CJ 886543"]);
