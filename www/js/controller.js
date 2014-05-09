function ToDoController($scope){

$scope.ToDo = [{Task: 'Task 1' , Details: 'This is an example of an angular.js application that I will use on a phonegap build.  Just checking out the capabilities of the storage and the outcome by using <p> and </p> tags.  I just discovered it has no effect!!!'},
			   {Task: 'Task 2' , Details: 'Some Other Details'},
			   {Task: 'Task 3' , Details: 'More of the same'}
			   ];
//add a task


$scope.addATask = function(){
	$scope.ToDo.push(
	{
		Task: $scope.addTask.task,
		Details: $scope.addTask.details,
	}
	);
	$scope.addTask.task = '';
	$scope.addTask.details = '';
}

//remove a task

 $scope.removeItem = function(index){
    $scope.ToDo.splice(index, 1);
}


}//close scope

