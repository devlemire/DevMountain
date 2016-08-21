angular.module('devmtnTravel')
.controller('homeCtrl', function($scope) {
  const bar = (a,b) => {
    return a+b;
  }

  var arr1 = [1,2,3];
  var arr2 = [4,5,6];

  var newArr = [...arr1, ...arr2];
})
