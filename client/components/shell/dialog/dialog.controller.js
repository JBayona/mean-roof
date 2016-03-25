'use strict';

angular.module('roofApp')
  .controller('DialogController', function ($scope, $mdDialog) {
  $scope.closeDialog = function() {
    $mdDialog.hide();
  };

  
});
