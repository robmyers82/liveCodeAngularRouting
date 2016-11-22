angular.module('livecode').factory('Student', function($firebaseArray, $firebaseObject) {
	var studentRef = firebase.database().ref().child("students");

	var Student = {
		students: [],

		addNewStudent: function(newStudent) {
			return Student.students.$add(newStudent);
		},

		getStudents: function() {
			return Student.students;
		},

		getStudent: function(student_id) {
			var individualStudentRef = studentRef.child(student_id);
			return $firebaseObject(individualStudentRef);
		},

		saveStudent: function(theStudent) {
			return theStudent.$save();
		},
	};

	Student.students = $firebaseArray(studentRef);

	return Student;
});