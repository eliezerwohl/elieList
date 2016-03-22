angular.module('garageApp', [])
.controller('GarageSaleController', function($http) {
   var garageSale = this;
   garageSale.lists = [];
   garageSale.login = function() {
    garageSale.loggedIn = true;

        $http({
        method: 'POST',
        url: '/user',
        data: {username:garageSale.username}
       }).then(function(result) {

        console.log(result.data);
        garageSale.userId = result.data._id;
        garageSale.username = result.data.username;
        garageSale.bank = result.data.bank;
        // budgetTracker.expenses = result.data.expenses;
      });
    };

garageSale.addItem = function(){
  $http({
        method: 'POST',
        url: '/newItem/',
        data: {
          price:garageSale.item.price,
          name: garageSale.item.name,
          _user:garageSale.userId,
          description:garageSale.item.description
        }
      }).then(function(result) {

        console.log(result)
         garageSale.lists.push(result.data);
      });
    };
  garageSale.getItems = function() {
      $http({
        method: 'GET',
        url: '/items'
      }).then (function (result){
        angular.forEach(result.data, function (eachOne){
          garageSale.lists.push(eachOne);
        });
      });
    };


    garageSale.sell = function(id, price){
      garageSale.bank = garageSale.bank - price;
      updateBank(garageSale.bank);
       var url = "/sell/"+id;
  $http({
        method: 'POST',
        url: url
      }).then(function(result) {
        console.log(result)
       
      });
    };

    
    // };
function updateBank(bank){
  var url = "/updateBank/"+ bank + "/" + garageSale.userId;
 $http({
        method: 'POST',
        url: url
  }).then(function(result) {
        console.log(result)
      });
    };

garageSale.comment = function(id){
  debugger
  console.log("you hit the function +" + id)
var url = "/comment/";
  $http({
        method: 'POST',
        url: url,
        data: {
          comment:garageSale.item.comment,
          _item:id
        }
      }).then(function(result) {

        console.log(result)
         garageSale.lists.push(result.data);
      });
};


garageSale.getItems();


  })