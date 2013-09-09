(function() {

    var app = angular.module('clts', ['clts.champion', 'clts.faqs']);

    app.run(['$rootScope', 'championModel', 'faqsModel',
        function($rootScope, championModel, faqsModel) {
            
            if (championModel.champion.activated === false) {
                window.location = '#/champion/activate/';
            }

            faqsModel.update();
        }
    ]);

    app.config(function($routeProvider) {

        $routeProvider.
            when('/', {
                //controller: 'menuController',
                templateUrl: 'menu.html'
            });
    });
})();
