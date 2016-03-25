'use strict';

describe('Controller: RoofCtrl', function () {

  // load the controller's module
  beforeEach(module('roofApp'));

  var RoofCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoofCtrl = $controller('RoofCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
