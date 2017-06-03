(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var list1 = this;

  list1.items = ShoppingListCheckOffService.getToBuyItems();


  list1.boughtItem = function (itemIndex) {
    // if (list1.items.length > 0){
    //   ShoppingListCheckOffService.boughtItem(itemIndex);
    // }else{
    //   list1.errorMessage = 'Everything is bought!'; 
    // }
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getBoughtItems(); 
}


function ShoppingListCheckOffService() {
  var service = this;

  var buy = [];

  var toBuy = [
          { name: "cookies", quantity: 10 },
          { name: "coco", quantity: 8 },
          { name: "chicken", quantity: 10 },
          { name: "ducks", quantity: 10 },
          { name: "beef", quantity: 10 },
          { name: "water", quantity: 10 },
          { name: "juice", quantity: 10 },
          { name: "bottles", quantity: 10 },
          { name: "cups", quantity: 10 },
          { name: "glasses", quantity: 10 }];
  
  service.boughtItem = function (itemIndex) {
    var item = toBuy[itemIndex];
    buy.push(item);

      toBuy.splice(itemIndex, 1);
    
  };

  service.getToBuyItems = function () {
    return toBuy;
  };
  service.getBoughtItems = function(){
       return buy;  
  };
}

})(); 

