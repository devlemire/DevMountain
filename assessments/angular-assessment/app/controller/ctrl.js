angular
  .module('assessment')
  .controller('ctrl', function($scope, srvc) {

    $scope.getData = function() {
      srvc.getData().then(function( r ) {
        //console.log(r.data);
        $scope.data = r.data;
      });
    };

    $scope.getData();

  });
