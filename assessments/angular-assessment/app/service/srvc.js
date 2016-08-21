angular
  .module('assessment')
  .service('srvc', function($http) {

    this.getData = function() {
      return $http.get('http://practiceapi.devmounta.in/products');
    };

    this.getSpecificData = function(id) {
      return $http.get('http://practiceapi.devmounta.in/products/' + id);
    };

  });
