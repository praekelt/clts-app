(function() {

    var app = angular.module('clts.dataCollect', []);

    // app.controller('dataController',
    //     ['$scope',

    //     function($scope) {

    //         console.log('pew')
    //         //$scope.faqs = faqsModel.faqs;
    //     }
    // ]);

    app.config(function($routeProvider) {
        $routeProvider.
            when('/collect/', {
                //controller: 'dataController',
                templateUrl: 'data_collect.html'
            });
    });


})();
