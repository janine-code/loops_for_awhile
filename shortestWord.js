var assert = require('assert');

function shortestWord(string) {
  var splitString = string.split(" ");
  var minWordLength = 3;
  //var val =["this","no","how"]; var minWordLength=val[0].length;
  var shortestW = "";
  for (var i = 0; i < splitString.length; i++) {
    if (minWordLength > splitString[i].length) {
      minWordLength = splitString[i].length;
      shortestW = splitString[i];
    }
  }
  return shortestW;
}
console.log(shortestWord("how are you mi"));
assert.equal(shortestWord("how are you mi"), "mi");
