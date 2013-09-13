(function() {

    var app = angular.module('clts', ['clts.champion', 'clts.faqs', 'clts.pages']);

    app.run(['$rootScope', 'championModel', 'faqsModel', 'pagesModel',
        function($rootScope, championModel, faqsModel, pagesModel) {
            
            // disabled activation.            
            // if (championModel.champion.activated === false) {
            //     window.location = '#/champion/activate/';
            // }

            faqsModel.update();
            pagesModel.update('training');
        }
    ]);

    app.controller('menuController',
        ['$scope', 'championModel', 'faqsModel', 'pagesModel',
        function($scope, championModel, faqsModel, pagesModel) {
            $scope.update = function() {
                console.log('-- updating...');
                // update villages.
                faqsModel.update();
                pagesModel.update('training');
            };
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
