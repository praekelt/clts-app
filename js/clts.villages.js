(function() {

    var app = angular.module('clts.villages', []);

    app.factory('villagesModel', ['$rootScope', '$http',
        function($rootScope, $http) {

            var _that = this;
            var villages = window.clts.storage.get('villages') || [];

            var createVillage = function(name) {
                //return {duplicate: true};
                // TODO: search the list of villages for
                // one with the same name,
                // and responsd with an error.
                var village = {name: name};
                _that.villages.push(village);
                window.clts.storage.set('villages', villages);
                return village;
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




            $scope.form_1 = function(village, fields) {

                var fieldOverrides = {
                    fieldOverrides: "{\"name\":\"pew\"}"
                };
                var f = JSON.stringify(fieldOverrides);
                alert(f);
                window.formContext.startFormActivity('village_profile', undefined, f);
            };

            $scope.form_2 = function(village, fields) {
                var fieldOverrides = {
                    fieldOverrides: "{\"name\":\"pew\"}"
                };
                var f = JSON.stringify(fieldOverrides);
                alert(f);
                window.formContext.startFormActivity('cc_monthly_report', undefined, f);

            };

            $scope.selectVillage = function(village) {

                // so this opens the form...
                
            };

        }
    ]);

    app.controller('createVillageController',
        ['$scope', 'villagesModel',
        
        function($scope, villagesModel) {
            $scope.create = function(name) {
                var response = villagesModel.createVillage(name);
                if (response.duplicate) {
                    $scope.duplicate = true;
                }
            };
        }
    ]);


    app.config(function($routeProvider) {
        $routeProvider.
            when('/village/select', {
                controller: 'selectVillageController',
                templateUrl: 'village_select.html'
            });
    });


})();
