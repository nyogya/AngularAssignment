/// <reference path="../angular.js" />


/// <reference path="Module.js" />

app.controller('customerController', function ($scope, customerService) {
    loadRecords();

    //Function to load all customer records
    function loadRecords() {
        var promiseGet = customerService.getCustomers(); //The MEthod Call from service

        promiseGet.then(function (pl) { $scope.Customers = pl.data },
              function (errorPl) {
                  $log.error('failure loading customers', errorPl);
              });
    }

});