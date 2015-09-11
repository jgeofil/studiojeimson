'use strict';

/**
 * @ngdoc function
 * @name studiojeimsonApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the studiojeimsonApp
 */
angular.module('studiojeimsonApp')
  .controller('NewsCtrl', ['$routeParams', function ($routeParams) {
    this.template = $routeParams.newsName;
  }]);
