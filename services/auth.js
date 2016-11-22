angular.module('livecode').factory('Auth', function($firebaseAuth) {

	var auth = $firebaseAuth();
	var loggedIn = false;

	auth.$onAuthStateChanged(function(firebaseUser) {
		if (firebaseUser) {
			Auth.user = firebaseUser;
			// console.log("Signed in as:", firebaseUser.uid);
			// console.log(firebaseUser);
		} else {
			console.log("Not signed in");
		}
	});

	var Auth = {
		user: {},

		loginWithFacebook: function() {
			return auth.$signInWithPopup("facebook");
		},

		isLoggedIn: function() {
			return Auth.user != {};
		}
	};

	return Auth;
});