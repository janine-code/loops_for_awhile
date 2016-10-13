const assert = require('assert');

var shopList = function(shopItems) {
  var splitItems = shopItems.split(",");
  var arrList = [];
  for (var i = 0; i < splitItems.length; i++) {
    arrList.push(splitItems[i]);
  }
  return arrList;
}
console.log(shopList("shopping List, *2xeggs, *1xcream, *1xbutter, *1xcheese, *4xpeanuts"));
assert.equal(shopList("shopping List, *2xeggs, *1xcream, *1xbutter, *1xcheese, *4xpeanuts"), "shopping List, *2xeggs, *1xcream, *1xbutter, *1xcheese, *4xpeanuts");
