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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl',
        controllerAs: 'clients'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
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
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $http){
    $http.get('projects/projects.json')
      .success(function(data) {
          $rootScope.projects=data;
      })
      .error(function(){
          $rootScope.projects=[];
      });
    $http.get('news/news.json')
      .success(function(data) {
          $rootScope.news=data;
      })
      .error(function(){
          $rootScope.news=[];
      });

  });
