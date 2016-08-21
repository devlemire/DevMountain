angular
  .module('routerApp')
  .controller('mainCtrl', function($scope, $stateParams, srvc) {

    $scope.test = srvc.getName();
    console.log($scope.test);


});
