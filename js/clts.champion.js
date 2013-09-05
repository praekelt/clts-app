(function() {

    var app = angular.module('clts.champion', ['clts.villages']);

    app.factory('championModel', ['$rootScope', '$http',
        function($rootScope, $http) {

            var _that = this;

            var champion = window.clts.storage.get('champion');
            if (champion === false) {
                champion = {activated: false, msisdn: '1234567890'};
            }

            var activate = function(msisdn) {

                var url = window.clts.api.url('champions', msisdn, 'activate');
                var promise = $http.post(url).
                    then(function(o) {

                        // save data.
                        window.clts.storage.set('champion', o.data.champion);
                        window.clts.storage.set('villages', o.data.villages);
                        _that.error = false;
                        _that.champion = o.data.champion;
                        _that.champion.notFound = false;

                        // if (_that.champion.activated) {
                        //     $rootScope.$broadcast('championModel::activated');
                        // }

                    }, function(o) {
                        if (o.status == 404) {
                            _that.champion.notFound = true;
                        }
                        _that.error = true;
                    });
                return promise;
            };

            this.champion = champion;
            this.activate = activate;
            return this;
        }
    ]);

    app.controller('activateController', ['$scope', 'championModel',
        function($scope, championModel) {

            $scope.champion = championModel.champion;
            $scope.activate = function(msisdn) {
                championModel.activate(msisdn).then(function() {
                    if (championModel.champion.activated) {
                        window.location = '#/champion/welcome/';
                    }
                });
            };
        }
    ]);

    app.controller('welcomeController', ['$scope', 'championModel', 'villagesModel',
        
        function($scope, championModel, villagesModel) {

            $scope.champion = championModel.champion;
            $scope.villages = villagesModel.villages;
            $scope.continue = function() {
                console.log('pew');
                window.location = '/';
            };
        }
    ]);

    app.config(function($routeProvider) {

        $routeProvider.
            when('/champion/activate/', {
                controller: 'activateController',
                templateUrl: 'champion_activate.html'
            }).
            when('/champion/welcome/', {
                controller: 'welcomeController',
                templateUrl: 'champion_welcome.html'
            });

    });

})();
