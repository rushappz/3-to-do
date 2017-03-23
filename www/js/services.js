app.factory('todoService', function($firebaseArray) {
	var ref = firebase.database().ref();
	var todo = $firebaseArray(ref);
	var todoService = {
			all: todo,
			get: function(todoId) {
				return todo.$getRecord(todoId);
			}
	}
		
	return todoService;
});