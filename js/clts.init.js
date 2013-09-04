(function() {

    var app = angular.module('clts', ['clts.champion']);

    app.run(['$rootScope', 'championModel',
        function($rootScope, championModel) {
            
            if (championModel.champion.activated === false) {
                window.location = '#/champion/activate/';
            }
        }
    ]);

    app.controller('menuController', [
        function() {
        }
    ]);

    app.config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'menuController',
                templateUrl: 'menu.html'
            });
    });
})();
