(function() {

    var app = angular.module('clts.pages', []);

    app.factory('pagesModel', ['$rootScope', '$http',
        function($rootScope, $http) {

            var _that = this;
            
            var pages = window.clts.storage.get('pages');
            if (pages === false) {
                pages = {};
            }

            var update = function(category) {

                var _that = this;
                var url = window.clts.api.url('pages', category);
                
                
                var promise = $http.get(url).
                    then(function(o) {
                        if (o.data.length > 0 && o.status == 200) {
                            _that.pages[category] = o.data;
                            window.clts.storage.set('pages', _that.pages);
                        }
                    });
                return promise;
            };

            this.pages = pages;
            this.update = update;
            return this;
        }
    ]);

    app.controller('pagesController',
        ['$scope', 'pagesModel',
        
        function($scope, pagesModel) {
            $scope.pages = pagesModel.pages;
        }
    ]);

    app.config(function($routeProvider) {
        $routeProvider.
            when('/pages/training/', {
                controller: 'pagesController',
                templateUrl: 'pages.html'
            });
    });


})();
