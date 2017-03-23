app.controller('todoCtrl', function($scope, $firebaseArray, $state, todoService) {
	$scope.saveTodo = function(){
		$scope.newTodo = todoService.all;
		$scope.newTodo.$add({
			name: $scope.name
		});
		
		$scope.name = '';
		$state.go('todo');
	}
});