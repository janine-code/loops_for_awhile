const assert = require('assert');

var totalPhoneBill = function(num) {
  var split = num.split(", ");
  var arrSms = [];
  var arrCall = [];
  for (var i = 0; i < split.length; i++) {
    if (split[i].startsWith('sms')) {
      arrSms.push(split[i]);
    } else if (split[i].startsWith('call')) {
      arrCall.push(split[i]);
    } else {}
  }
  var smsTotal = (arrSms.length) * 0.65
  var callTotal = (arrCall.length) * 2.75;
  return "R" + (smsTotal + callTotal);
}
console.log(totalPhoneBill("call, sms, call, sms, sms"));
assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");
