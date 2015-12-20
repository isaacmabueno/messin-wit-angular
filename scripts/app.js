angular.module('todoListApp', [])
.controller('mainCtrl', function($scope) {
  $scope.test = function() {
    console.log('Test 1,2,3 on the mainCtrl');
  };
})

.controller('coolCtrl', function ($scope) {
  $scope.editS = function() {
    console.log("You are clicking the edit button");
  };

  $scope.test = function() {
    console.log("this is not the main- instead this is the sub");
  }
});
