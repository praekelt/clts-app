

(function() {

    var app = angular.module('clts.champion', []);

    app.factory('championModel', ['$http',
        function($http) {

            var champion = window.clts.storage.get('champion');
            if (champion === false) {
                champion = {activated: false, msisdn: '1234567890'};
            }

            var activate = function(msisdn) {



            };

            this.champion = champion;
            this.activate = activate;
            return this;
        }
    ]);

    app.controller('activateController', ['$scope', 'championModel',
        function($scope, championModel) {

            $scope.champion = championModel.champion;
            $scope.activate = championModel.activate;
            
        }
    ]);

    app.config(function($routeProvider) {

        $routeProvider
            .when('/champion/activate/', {
                controller: 'activateController',
                templateUrl: 'champion_activate.html'
            });

    });

})();



