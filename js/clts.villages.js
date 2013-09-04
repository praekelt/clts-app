(function() {

    var app = angular.module('clts.villages', []);

    app.factory('villagesModel', ['$rootScope', '$http',
        function($rootScope, $http) {

            var _that = this;
            var villages = window.clts.storage.get('villages');

            this.villages = villages;
            return this;
        }
    ]);
})();
