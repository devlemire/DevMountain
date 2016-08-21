angular
  .module('assessment')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html'
      })
      .state('shop', {
        url: '/shop',
        templateUrl: './views/shop.html',
        controller: 'ctrl'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html'
      })
      .state('details', {
        url: '/details/:id',
        templateUrl: './views/product-details.html',
        controller: function($scope, $stateParams, srvc) {
          srvc.getSpecificData($stateParams.id).then(function( r ) {
            $scope.data = r.data;
          });
        }
      });

      $urlRouterProvider.otherwise('/');

  });
