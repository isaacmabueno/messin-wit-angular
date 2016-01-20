angular.module('todoListApp', [])
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.changeNg = function() {
    console.log('something changed here in real time- test');
  };
  $scope.todos = dataService.getTodos();
//   $scope.todos = [
//   {"name": "mail thank you's"},
//   {"name": "cut out center pieces"},
//   {"name": "pay for the rest of the flowers"}
// ]
});



.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log('this is the hello console service!');
  };
  this.getTodos = $http.get('mock/todos.json').then(function(response){
    console.log(resonse.data);
    return response.data;
  });
  $scope.deleteTodo = function(dataService) {
    dataService.deleteTodo(todo);
  }

  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
  };
  this.saveTodo = function(todo) {
    console.log("The" + todo.name + " has been saved")
  };
});

// .controller('coolCtrl', function ($scope) {
//   $scope.editS = function() {
//     console.log("You are clicking the edit button");
//   };

  // $scope.test = function() {
  //   console.log("this is not the main- instead this is the sub");
  // };

// });
