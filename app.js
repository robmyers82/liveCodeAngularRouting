var app = angular.module('livecode', [
	'ngRoute',
	'firebase',
]);

angular.module('livecode').config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainController',
		resolve: {
	  		AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	  		}
		}
	})
	.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController',
	})
	.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController',
		resolve: {
	  		AuthWaitForLogged: function(Auth) {
	  			return Auth.getAuth().$waitForSignIn();
	  		}
		}
	})
	.otherwise('/')
});
