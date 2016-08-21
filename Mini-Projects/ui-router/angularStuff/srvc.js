angular
  .module('routerApp')
  .service('srvc', function($stateParams) {

    var myObj = {
      name: $stateParams.type
    };

    this.getName = function() {
      return myObj;
    };

  });
