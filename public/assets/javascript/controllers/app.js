angular.module('garageApp', [])
.controller('GarageSaleController', function($http) {
   var garageSale = this;
   garageSale.login = function() {
    garageSale.loggedIn = true;

        $http({
        method: 'POST',
        url: '/user',
        data: {username:garageSale.username}
       }).then(function(result) {
        debugger
        console.log(result.data);
        garageSale.userId = result.data._id;
        garageSale.username = result.data.username;
        garageSale.bank = result.data.bank;
        // budgetTracker.expenses = result.data.expenses;
      });
    };



  })