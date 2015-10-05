'use strict';

describe('Directive: jeimsonGallery', function () {

  // load the directive's module
  beforeEach(module('studiojeimsonApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jeimson-gallery></jeimson-gallery>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jeimsonGallery directive');
  }));
});
