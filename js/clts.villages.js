(function() {

    var app = angular.module('clts.villages', []);

    app.factory('villagesModel', ['$rootScope', '$http',
        function($rootScope, $http) {

            var _that = this;
            var villages = window.clts.storage.get('villages');

            var createVillage = function(name) {
                var village = {
                    name: name
                };
                _that.villages.push(village);
                window.clts.storage.set('villages', villages);
            };

            this.villages = villages;
            this.createVillage = createVillage;
            return this;
        }
    ]);

    app.controller('selectVillageController',
        ['$scope', 'villagesModel',
        
        function($scope, villagesModel) {

            $scope.villages = villagesModel.villages;


            $scope.selectVillage = function(village) {
                console.log(village);
            };

        }
    ]);

    app.controller('createVillageController',
        ['$scope', 'villagesModel',
        
        function($scope, villagesModel) {

            

            $scope.name = 'A new village';
            $scope.create = function(name) {
                villagesModel.createVillage(name);
            };
        }
    ]);


    app.config(function($routeProvider) {
        $routeProvider.
            when('/village/select/', {
                controller: 'selectVillageController',
                templateUrl: 'village_select.html'
            });
    });



})();
