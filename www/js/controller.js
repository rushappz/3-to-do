app.controller('todoCtrl', function($scope, $firebaseArray, $state, todoService, $ionicActionSheet) {
	$scope.todo = todoService.all;
	
	$scope.saveTodo = function(){
		$scope.newTodo = todoService.all;
		$scope.newTodo.$add({
			name: $scope.name
		});
		
		$state.go('todo');
	}
	
	$scope.removeTodo = function(id) {
		$ionicActionSheet.show({
			destructiveText: 'Remove Todo',
			titleText: 'Are you sure?',
			cancelText: 'Cancel',
			destructiveButtonClicked: function(){
				var rem = $scope.todo.$getRecord(id);
				$scope.todo.$remove(rem);
				return true;
			}
		});
	}
});