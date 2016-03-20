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
        console.log(result.data);
          });
    };

  });