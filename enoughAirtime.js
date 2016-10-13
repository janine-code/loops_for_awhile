const assert = require('assert');

var budgetRand = 50.00;
var enoughAirtime = function(num) {
  var split = num.split(",");
  var arrSms = [];
  var arrCall = [];
  var arrData = [];
  for (var i = 0; i < split.length; i++) {
    if (split[i].startsWith('sms')) {
      arrSms.push(split[i]);
    } else if (split[i].startsWith('call')) {
      arrCall.push(split[i]);
    }
    else if(split[i].startsWith('data')){
      arrData.push(split[i]);
    }
    else{}
  }
  var smsTotal = (arrSms.length) * 0.75;
  var callTotal = (arrCall.length) * 1.88;
  var dataTotal = (arrData.length)*12.00;
  var totalSpend = smsTotal + callTotal + dataTotal;
  var dataLeft = (budgetRand - totalSpend).toFixed(2);
  if(dataLeft<=0){console.log("R"+0);
}else {
  console.log("R"+dataLeft)
  return "R"+dataLeft;
}
}
enoughAirtime('call,call,call,data,sms,sms,call,data');
assert.equal(enoughAirtime('call,call,call,data,sms,sms,call,data'),"R16.98")
