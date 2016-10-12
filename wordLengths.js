var assert = require('assert');

var wordLength = function(str){
  var replaceSpace = str.replace(/\s/g, '');
  //console.log(replaceSpace);
  var strSplit = replaceSpace.split("")
//  console.log(strSplit);
  var arr = [];
  for(var i=0; i<strSplit.length; i++){
arr.push(strSplit[i]);
  }
//console.log(arr.length);
  return arr.length;

}
console.log(wordLength("hi sam how you"));
 //assert.equal(wordLength("hi sam how you"),11);
assert.equal(wordLength("hi sam how you"),11);
