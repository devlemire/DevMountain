angular
  .module('devmtnTravel')
  .controller('bookedCtrl', function($scope, $stateParams, mainSrv) {

    var $id = $stateParams.id;
    var travelInfo = mainSrv.travelInfo;

    for(var i = 0; i < travelInfo.length; i++) {
      for(var j in travelInfo[i]) {
        if(j == 'id') {
          if(travelInfo[i][j] == $id) {
            $scope.currentInfo = travelInfo[i];
          }
        }
      }
    }

    $scope.bg = {
      "background-image" : "url(" + $scope.currentInfo.image + ")",
      "background-position" : "center",
      "background-size" : "cover"
    };
    //console.log($scope.currentInfo);
  });
