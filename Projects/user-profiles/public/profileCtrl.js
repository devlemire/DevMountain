angular
	.module('userProfiles')
	.controller('profileCtrl', function( $scope, userInfo ) {
		console.log("Current User: ", userInfo.data);
		$scope.currentUser = userInfo.data.currentUser;
		$scope.friends = userInfo.data.friends;
});
