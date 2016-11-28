angular.module('livecode').controller('LoginController', function($scope, Auth, AuthWaitForLogged) {

	if (AuthWaitForLogged == null) {

		// nobody is logged in
		$scope.isLoggedIn = false;
	}
	else {

		// somebody is logged in
		$scope.isLoggedIn = true;
		$scope.currentUser = Auth.checkUser(AuthWaitForLogged);
	}

	$scope.loginWithFacebook = function() {
		
		// login with Facebook
		Auth.loginWithFacebook().then(function(firebaseUser) {
			$scope.currentUser = Auth.checkUser(firebaseUser.user);
			$scope.isLoggedIn = true;
			// console.log("Signed in as:", firebaseUser.user.displayName);
			// console.log(firebaseUser);
		}).catch(function(error) {
			console.log("Authentication failed:", error);
		});
	};

	$scope.logout = function() {

		Auth.logout().then(function() {
			$scope.isLoggedIn = false;
		});
	};
});




















