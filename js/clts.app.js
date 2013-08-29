var app = angular.module('cltsApp', []);


// this runs at the start of the app.
app.run(function($rootScope) {
});

// data service factory is a singleton that's only concerned
// with keeping the API's data up to date.
app.factory('dataService', ['$http', function($http) {
    var d = {};
    d.champion = {};
    d.champion.activate = function(msisdn) {
        // activate the user via the api
        console.log('activate', msisdn);
    };

    //var villages = localStorage.getItem('villages') || {};
    d.villages = {};
    d.villages.update = function() {
        console.log('fetch a new list of villages');
    };

    return d;
}]);

// the activation controller...
app.controller('ActivationController', ['$scope', 'dataService',

    function($scope, dataService) {
        $scope.msisdn = '1234567890'; // example
        $scope.activate = function(msisdn) {
            dataService.champion.activate(msisdn);
        };
}]);
