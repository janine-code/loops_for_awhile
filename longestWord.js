var assert = require('assert');

var longestWord = function(sentence){
  var split = sentence.split(" ");
  var longestW = 0;

  for(var i = 0; i<split.length; i++){

    if(split[i].length >longestW){
      longestW=split[i].length;
      

    }


  }

  return longestW;
}
console.log(longestWord("I love trees"));
