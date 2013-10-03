(function() {

    var app = angular.module('clts', [
        'ngRoute',
        'ngTouch',
        'ajoslin.mobile-navigate',

        'clts.champion',
        'clts.faqs',
        'clts.pages',
        'clts.dataCollect',
    ]);

    app.run(['$rootScope', 'championModel', 'faqsModel', 'pagesModel',
        function($rootScope, championModel, faqsModel, pagesModel) {


            if (championModel.champion.activated === false) {
                window.location = '#/champion/activate';
            }

            faqsModel.update();
            pagesModel.update('training');
  
        }
    ]);

    app.directive('toolbarMenu', ['$navigate',
        function ($navigate) {
        return {
            restrict: 'A',
            templateUrl: 'toolbar.html',
            link: function ($scope, $el, attrs) {
                $scope.back = function(p) {
                    $navigate.go(p);
                };
            }
        };
    }]);

    app.controller('menuController',
        ['$scope', '$navigate',
        'championModel', 'faqsModel', 'pagesModel',
        function($scope, $navigate, championModel, faqsModel, pagesModel) {

            $scope.$navigate = $navigate;

            $scope.update = function() {

                console.log('-- updating...');
                // update villages.
                faqsModel.update();
                pagesModel.update('training');

                console.log('-- done');
            };

            $scope.pew = function() {
                console.log('gogogogo')
                navigationContext.startVillageListActivity();
            }
        }
    ]);

    app.config(function($routeProvider) {

        $routeProvider.
            when('/', {
                controller: 'menuController',
                templateUrl: 'menu.html'
            });
    });
})();
