angular
  .module('routingApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../view/home.html',
        controller: 'homeCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: '../view/settings.html',
        controller: 'settingsCtrl'
      })
      .state('products', {
        url: '/products/:id',
        templateUrl: '../view/products.html',
        controller: 'productsCtrl'
      });

  });
