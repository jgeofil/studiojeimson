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
    'ngTouch',
    'viewhead'
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
      //.when('/news/:newsName', {
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl',
        controllerAs: 'news'
      })
      .when('/uitnodiging', {
        templateUrl: 'views/uitnodiging.html',
        controller: 'UitnodigingCtrl',
        controllerAs: 'uit'
      })
      .otherwise({
        redirectTo: '/news'
      });
  })
  .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
       $rootScope.$on('$routeChangeSuccess',
          function(){
            if (!$window.ga) {return;}
            $window.ga('send', 'pageview', { page: $location.path() });
          });
  }]);
