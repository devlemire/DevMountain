angular
  .module('routerApp')
  .config(function($stateProvider, $urlRouterProvider) {

  //This is a catch all for our routes
  $urlRouterProvider.otherwise("/");

  //We need to configure our routes here
  $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
    })
    .state('studio', {
        url: '/studio',
        templateUrl: 'views/studio.html'
    })
    .state('projects', {
        url: '/projects/:type',
        templateUrl: 'views/projects.html',
        controller: 'mainCtrl'
    });

});
