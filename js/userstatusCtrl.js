app.controller('userstatusCtrl',function($scope){

$scope.getstatus = function () {

 $scope.submitted = true;
 
 if ($scope.orderForm.$valid) {
 alert("Form is valid!");

 }
 else {
 //alert("Please correct errors!");
 }
 };	
	
}); 