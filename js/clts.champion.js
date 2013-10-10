(function() {

    var app = angular.module('clts.champion', ['clts.villages']);



    app.factory('championModel', 
        ['$rootScope', '$http',
        function($rootScope, $http) {

            this.champion = window.clts.storage.get('champion') || {};
            
            var activate = function(msisdn) {
                $http.post(window.clts.api.url('champions', msisdn, 'activate')).
                    error(function(data, status) {



                        // // at some stage we'll standardise this
                        // var error = "An unknown error occured, are you connected to the Internet?";
                        // if (status == 404) {
                        //     error = "The mobile number could not be found";
                        // }
                        // return {error: error};
                    }).
                    success(function(data, status, ) {

                    })
                //     .then(function(res) {

                //         // activation was successfull
                //         if (res.status == 200) {

                //             // and store the villages that they're responsible for
                //             if (typeof(res.data.villages) !== 'undefined') {
                //                 window.clts.storage.set('villages', res.data.villages);
                //             }

                //             // Save the new community champion
                //             if (typeof(res.data.champion) !== 'undefined') {
                //                 that.champion = res.data.champion;
                //                 window.clts.storage.set('champion', res.data.champion);
                //             }

                //             return {};

                //         }  else {
                //             return {error: "You could not be activated."};
                //         }
                //     });

                // return promise;
            };

            this.activate = activate.bind(this);
            return this;
        }
    ]);

    app.controller('activateController',
        
        ['$scope', '$navigate', 'championModel',
        function($scope, $navigate, championModel) {

            $scope.champion = championModel.champion;

            $scope.activate = function(msisdn) {

                championModel.activate(msisdn)
                    .then(function(p) {
                        if (championModel.champion.activated) {
                            $navigate.go('/champion/welcome');
                        }  
                    });

                championModel.activate(msisdn).then(function(o) {

                    console.log(o);

                    //$scope.champion = championModel.champion;
                    
                    
                });
            };
        }
    ]);

    app.controller('welcomeController',

        ['$scope', '$navigate', 'championModel', 'villagesModel',
        function($scope, $navigate, championModel, villagesModel) {
            $scope.champion = championModel.champion;
            $scope.villages = villagesModel.villages;
            $scope.$navigate = $navigate;
        }
    ]);

    app.config(function($routeProvider) {

        $routeProvider.
            when('/champion/activate', {
                controller: 'activateController',
                templateUrl: 'champion_activate.html'
            }).
            when('/champion/welcome', {
                controller: 'welcomeController',
                templateUrl: 'champion_welcome.html'
            });

    });

})();
