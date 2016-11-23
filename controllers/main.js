angular.module('livecode').controller('MainController', function($scope, Auth, AuthWaitForLogged, Student) {
	
	if (AuthWaitForLogged == null) {

		// nobody is logged in
		$scope.isLoggedIn = false;
	}
	else {

		// somebody is logged in
		$scope.isLoggedIn = true;
		$scope.currentUser = Auth.checkUser(AuthWaitForLogged);
		
		$scope.welcomeMessage = "Hey "+$scope.currentUser.display_name;
	}

	console.log('isLoggedIn');
	console.log($scope.isLoggedIn);

	$scope.studentsList = Student.getStudents();

	$scope.checkSpencer = function() {
		$scope.currentStudent = Student.checkSpencer();
	};

	$scope.addStudent = function() {

		if ($scope.newStudent === undefined || $scope.newStudent.name == "" || $scope.newStudent.class == "" || $scope.newStudent.question == "") {
			alert("Please enter all required information");
		}
		else {
			Student.addNewStudent($scope.newStudent).then(function() {
				console.log("Added!");
			});
		}
	};

	$scope.showUpdateStudent = function(student_id) {
		$scope.updateStudent = Student.getStudent(student_id);
		$("#updateModal").modal('show');
	};

	$scope.updateTheStudent = function(theStudent) {
		Student.saveStudent(theStudent).then(function() {
			alert("All good!");
		});
	};
});




















