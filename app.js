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
			AuthLogged: function(Auth) {
	            return Auth.isLoggedIn();
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
			AuthLogged: function(Auth) {
	            return Auth.isLoggedIn();
	        }
		}
	})
	.otherwise('/')
});
