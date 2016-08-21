angular
  .module('assessment')
  .directive('products', function() {

    return {
      templateUrl: '../../views/product-tmpl.html',
      scope: {
        data: '='
      },
      link: function( scope, element, attr ) {

        scope.toggle = function() {
        
        };


      }
    };

  });
