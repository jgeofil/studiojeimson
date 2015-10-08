'use strict';

/**
 * @ngdoc directive
 * @name studiojeimsonApp.directive:jeimsonGallery
 * @description
 * # jeimsonGallery
 */
angular.module('studiojeimsonApp')
  .directive('jeimsonGallery', function () {
    return {
      templateUrl: '../scripts/directives/jeimson-gallery.html',
      restrict: 'E',
      transclude: true,
      scope: true,
      link: function postLink(scope, element) {
        scope.tags = element.find("img");
      },
      controller: function ($scope) {
        $scope.current = 0;

        $scope.isCurrent = function(index){

          return $scope.current === index;
        };

        $scope.setCurrent = function(index){
          $scope.current = index;
        };

      }
    };
  });
