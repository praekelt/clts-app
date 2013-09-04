
describe('ActivationController', function() {





    var $_httpBackend_;
    var scope, controller;

    var url, userMsisdn;


    
    beforeEach(module('activation'));
    beforeEach(inject(function($rootScope, $controller, $httpBackend) {
        
        scope = $rootScope.$new();
        controller = $controller('activationController', {
            $scope: scope
        });

        

    }));

    beforeEach(inject(function($httpBackend) {
        $_httpBackend_ = $httpBackend;
        $_httpBackend_.when('POST', url).respond([{}, {}, {}]);

        userMsisdn = '1234567890';
        window.api_host = '/';
        url = '/champions/' + userMsisdn + '/activate/';
    }));

    afterEach(function() {
        $_httpBackend_.verifyNoOutstandingExpectation();
        $_httpBackend_.verifyNoOutstandingRequest();
    });


    it('should not be activated by default', function() {

        expect(scope.champion.activated).toBe(false);
    });

    it ('should activate via data services', function() {


        $_httpBackend_.expectPOST(url);



        expect(scope.champion.activated).toBe(false);

        
        scope.activate(userMsisdn);

        //$httpBackend.flush();



        //expect(scope.champion.activated).toBe(true);
    });


});
