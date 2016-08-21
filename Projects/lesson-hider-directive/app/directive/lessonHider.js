angular
  .module('app')
  .directive('lessonHider', function() {

    return {
      restrict: 'E',
      templateUrl: '../../view/lessonHider.html',
      controller: function($scope, lessonService) {
          $scope.getSchedule = lessonService.getSchedule();
      },
      scope: {
        lesson: '=',
        dayAlert: '&'
      },
      link: function( scope, element, attributes ) {
          scope.getSchedule.then(function(response) {
            scope.schedule = response.data;

            scope.schedule.forEach(function( scheduleDay ) {
              if(scheduleDay.lesson === scope.lesson) {
                element.css('text-decoration', 'line-through');
                return;
              }
            });
          });
      }
    };

  });
