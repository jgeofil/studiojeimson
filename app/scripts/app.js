'use strict';

/**
 * @ngdoc overview
 * @name studiojeimsonApp
 * @description
 * # studiojeimsonApp
 *
 * Main module of the application.
 */
angular
  .module('studiojeimsonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'calendar'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/projects/:projectName', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/news/:newsName', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .otherwise({
        redirectTo: '/about'
      });
  })
  .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
       $rootScope
          .$on('$stateChangeSuccess',
              function(event){

                  if (!$window.ga)
                      return;

                  $window.ga('send', 'pageview', { page: $location.path() });
          });
  }]);
