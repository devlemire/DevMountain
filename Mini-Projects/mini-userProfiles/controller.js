angular
  .module('userProfiles')
  .controller('MainController', function($scope, mainService){

    $scope.displayUsers = function() {
      $scope.users = mainService.getUsers();
    };

    $scope.toggleFav = function(id){
      alert(id);
      mainService.toggleFav(id);
    };

    $scope.displayUsers();

});
