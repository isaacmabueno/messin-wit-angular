angular.module('todoListApp', [])
.controller('mainCtrl', function($scope) {
  $scope.test = function() {
    console.log('Test 1,2,3 on the mainCtrl');
  };
  $scope.todos = [
  {"name": "mail thank you's"},
  {"name": "cut out center pieces"},
  {"name": "pay for the rest of the flowers"}
]
})

.controller('coolCtrl', function ($scope) {
  $scope.editS = function() {
    console.log("You are clicking the edit button");
  };

  $scope.test = function() {
    console.log("this is not the main- instead this is the sub");
  };

});
