var assert = require('assert');

var wordLength = function(str) {
  var replaceSpace = str.replace(/\s/g, '');
  //console.log(replaceSpace);
  var strSplit = replaceSpace.split("")
    //  console.log(strSplit);
  var arr = [];
  for (var i = 0; i < strSplit.length; i++) {
    arr.push(strSplit[i]);
  }
  //console.log(arr.length);
  return arr.length;

}
console.log(wordLength("hi sam how you"));
//assert.equal(wordLength("hi sam how you"),11);
assert.equal(wordLength("hi sam how you"), 11);

/*another approach
var assert = require('assert');
var wordLengths = function(strings) {
  var stringSplit = strings.split(" ");
  var countWords = 0;
  var arrWords = [];
  for (var i = 0; i < stringSplit.length; i++) {
    arrWords.push(stringSplit[i]);
    countWords += arrWords[i].length;
  }
  return countWords;
}
console.log(wordLengths("The word is long"));
//console.log("The string is " wordLengths("The word is long") " long.");
assert.equal(wordLengths("The word is long"), 13);*/
