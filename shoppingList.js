const assert = require('assert');

var shopList = function(shopLi){
  var splitItems = shopLi.split(",");
  var arr = [];
for(var i=0;i< splitItems.length;i++){
  arr.push(splitItems[i]);
}
return arr;
}
console.log(shopList("shopping List, *2xeggs, *1xcream, *1xbutter, *1xcheese, *4xpeanuts"));

assert.equal(shopList("shopping List, *2xeggs, *1xcream, *1xbutter, *1xcheese, *4xpeanuts"),"shopping List, *2xeggs, *1xcream, *1xbutter, *1xcheese, *4xpeanuts");
