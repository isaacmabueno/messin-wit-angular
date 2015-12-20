angular.module("todoListApp", []);
.controller("mainCtrl", function($scope){
  $scope.test = function() {
    console.log('Test 1,2,3 on the mainCtrl');
  };
});
