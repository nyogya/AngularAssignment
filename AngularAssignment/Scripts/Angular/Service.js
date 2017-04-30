/// <reference path="../angular.js" />
/// <reference path="Module.js" />

app.service('customerService', function ($http) {
    //Get All customers
    this.getCustomers = function () {
        return $http.get("/api/Customers");
    }

});