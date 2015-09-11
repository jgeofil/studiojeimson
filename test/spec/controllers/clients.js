'use strict';

describe('Controller: ClientsCtrl', function () {

  // load the controller's module
  beforeEach(module('studiojeimsonApp'));

  var ClientsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientsCtrl = $controller('ClientsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


});
