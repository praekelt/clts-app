window.api_host = 'http://localhost:8000/api/v1/';


var app = angular.module('cltsApp', []);


// this runs at the start of the app.
app.run(function($rootScope) {
});

// data service factory is a singleton that's only concerned
// with keeping the API's data up to date.
app.factory('dataService', ['$http', function($http) {

    // TODO, we need a better API/ Data service here.

    
    var clts = localStorage.getItem('clts.v1') || false;
    window.clts = clts;
    // first run, setup default data and mark the champion as
    // inactive.
    if (!clts) {
        clts = {
            champion: {
                msisdn: '1234567890',
                activated: false
            },
            villages: {
            }
        };
    }


    var saveData = function() {
        
    };

    var activateChampion = function(msisdn) {

        var url = window.api_host + 'champions/' + msisdn +  '/activate/';
        $http.post(url, {})
            .success(function(data, status, headers, config) {

                clts.champion.activated = true;
                clts.villages = data;
                saveData();
            })
            .error(function(data, status, headers, config) {
                // whoopsie.
            });
    };

    var fetchVillages = function() {

    };

    return {
        data: clts,
        activateChampion: activateChampion,
        fetchVillages: fetchVillages
    };
}]);

// the activation controller...
app.controller('ActivationController', ['$scope', 'dataService',
    function($scope, dataService) {
        $scope.champion = dataService.data.champion;
        $scope.activate = function(msisdn) {
            dataService.activateChampion(msisdn);
        };
    }
]);
