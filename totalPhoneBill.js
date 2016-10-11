const assert = require('assert');

var totalPhoneBill  = function(num){
  var split = num.split(",");
  var arr = [];
  var arr2 = [];

      for (var i=0; i < split.length; i++){
        arr.push(split[i]);
if(split.startsWith("sms")){
  return R0.65;}
  else if(split.startsWith("call")){
    return R2.75;
  }


        }
return
}

}

console.log(totalPhoneBill ('call, sms, call, sms, sms'));

assert.deepEqual(allFromTown('call, sms, call, sms, sms'), "R7.45");
