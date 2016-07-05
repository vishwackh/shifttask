app.controller('submitdataCtrl',function($scope,uibDateParser,localStorageService,$timeout,$rootScope){

$scope.submitdata = {};

 $scope.bhkList = [
 { Id: 1, Name: 'Moving' },
 { Id: 2, Name: 'Packing' },
 { Id: 3, Name: 'Moving + Packing' },
 { Id: 4, Name: 'Delivary' }
 ];


//submitted data from Manually upload
$scope.submit=function(data){

   if ($scope.infoForm.$valid) {
     //send http:POST
  	console.log("shifting info:",data);
    console.log("main cart info:",$rootScope.mainCart);
   }
   else {
   alert("Please correct errors!");
   }
};

//submitdata by images
$scope.submitimg=function(data){

   if ($scope.infoForm.$valid) {
     //send http:POST
  	console.log("shifting info:",data);
    console.log("main cart img info:",$rootScope.upImages);
   }
   else {
   alert("Please correct errors!");
   }
};

  var itemStore1 = localStorageService.get('submitdata');

	$scope.submitdata= itemStore1 || [];

$scope.$watch('submitdata', function () {
      localStorageService.set('submitdata', $scope.submitdata);
    }, true);

// angulat bootstrap date picker option
    $scope.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd/MM/yyyy', 'shortDate'];
  $scope.format = $scope.formats[2];

   $scope.popup1 = {
     opened: false
   };
    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };
    $scope.popup2 = {
      opened: false
    };
     $scope.open2 = function() {
       $scope.popup2.opened = true;
     };


});
