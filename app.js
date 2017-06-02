(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyShoppingListController)
.controller('AlreadyBoughtController', AlreadyBuyShoppingListController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var list1 = this;

  list1.items = ShoppingListCheckOffService.getItems();


  list.boughtItem = function (list1.itemName, list1.itemQuantity, itemIndex) {
    if (list1.length > 0 ){
      ShoppingListCheckOffService.boughtItem(list1.itemName, list1.itemQuantity, itemIndex);
    }else{
      throw new Error ("Everything is bought!");
    }
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  var buy = [];
  // List of shopping items
  //var items = [];

  var items = [
        { name: "cookies", quantity: 10 },
        { name: "coco", quantity: 8 },
        { name: "biscuit", quantity: 10 },
        { name: "cookies", quantity: 10 },
        { name: "cookies", quantity: 10 },
        { name: "cookies", quantity: 10 },
        { name: "cookies", quantity: 10 },
        { name: "cookies", quantity: 10 },
        { name: "cookies", quantity: 10 },
        { name: "cookies", quantity: 10 }];

  service.boughtItem = function (itemName, quantity，itemIndex) {
    var item = {
        name: itemName,
        quantity: quantity
      };
    buy.push(item);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

})();
