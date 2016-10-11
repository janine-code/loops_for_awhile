const assert = require('assert');

var shopList = function(shopLi){
  var splitItems = shopLi.split(",");
for(var i=0;i< splitItems.length;i++){

console.log(splitItems[i]);
}
}
shopList("shopping List, *2xeggs, *1xcream, *1xbutter, *1xcheese, *4xpeanuts");
