angular
  .module('AvengerApp')
  .controller('MainControl', function($scope, dataService) {

  $scope.getHeroes = function() {
    $scope.teamAvengers = dataService.avengers;
  };

});
