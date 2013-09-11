(function() {

    var app = angular.module('clts', ['clts.champion', 'clts.faqs', 'clts.pages']);

    app.run(['$rootScope', 'championModel', 'faqsModel', 'pagesModel',
        function($rootScope, championModel, faqsModel, pagesModel) {
            
            // disable activation.            
            // if (championModel.champion.activated === false) {
            //     window.location = '#/champion/activate/';
            // }

            faqsModel.update();
            pagesModel.update('training');
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
