angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
  //In your controller you'll have a getMessages function and a postMessage function, but should be placed on $scope.

  //The getMessages function will call the getData method on the messageService object. You'll then save the result of that request to
  //your controllers $scope as messages ($scope.messages)


  $scope.getMessages = function() {
    messageService.getMessages().then(function(response) {
        console.log(response);
        var chats = response.data.chats;
        var returnMessages = [];
        for(var i = 0; i < chats.length; i++) {
          returnMessages.push({
            message: chats[i].message,
            createdAt: chats[i].createdAt,
            cookie: chats[i].cookie
          });
        }
        console.log(returnMessages);
        $scope.messages = returnMessages;
    });
  };

  $scope.getMessages();
  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will then post it to the backend.

  $scope.postMessage = function(m) {
    if( m !== "" ) {
      messageService.postMessage(m);
      clear();
    }
  };

  setInterval(function(){
    $scope.getMessages();
  }, 1500);

  function clear() {
    $scope.message = null;
  }
});
