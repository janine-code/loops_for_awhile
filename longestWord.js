var assert = require('assert');

function longestWord(string) {
  var splitString = string.split(" ");
  var maxWordLength = 0;
  var LongestW = "";
  for (var i = 0; i < splitString.length; i++) {
    if (maxWordLength < splitString[i].length) {
      maxWordLength = splitString[i].length;
      LongestW = splitString[i];
    }
  }
  return LongestW;
}
console.log(longestWord("Codex-bootcamp is great!"));
assert.equal(longestWord("Codex-bootcamp is great!"), "Codex-bootcamp");
