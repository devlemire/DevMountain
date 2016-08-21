angular
  .module('quoteApp')
  .controller('MainController', function($scope, MainService) {

    $scope.quotes = MainService.getQuotes();

    $scope.addQuote = function(quote) {
      MainService.addQuote(quote);
    };

    $scope.removeQuote = function(i) {
      MainService.removeQuote(i);
    };
  });
