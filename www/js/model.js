var todoApp = angular.module('todoApp', [])
 
todoApp.factory('listFactory', function() {
  return {
    getlist: function($scope) {
      return [{Task: 'Task 1' , Details: 'This is an example of an angular.js application that I will use on a phonegap build.  Just checking out the capabilities of the storage and the outcome by using <p> and </p> tags.  I just discovered it has no effect!!!'},
			   {Task: 'Task 2' , Details: 'Some Other Details'},
			   {Task: 'Task 3' , Details: 'More of the same'}
			   ];
    }
  };
});
 
todoApp.controller('todoController', function($scope, listFactory) {
  listFactory.getlist(function(results) {
    $scope.list = results.getlist;
  });
});