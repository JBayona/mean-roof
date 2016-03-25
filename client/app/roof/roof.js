'use strict';

angular.module('roofApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/roof/roof.html',
        controller: 'RoofCtrl'
      });
  });
