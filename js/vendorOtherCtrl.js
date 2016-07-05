app.controller('vendorOtherCtrl',function($scope,$http,$rootScope,taskFactory,$timeout,localStorageService,Data){
$scope.hdata - [];
$scope.data ={emailId:''};
$scope.reset = {emailId:'',password:'',newpassword:'',confirmPassword:''};
$scope.vendorsList = [];

$scope.editprofile = function(x){
$scope.hdata= angular.copy(x);
$scope.hdata.catgoryname = x.catgoryname && x.catgoryname.trim ? x.catgoryname.trim() : '';
$('#editmodel').modal('show');
};

$rootScope.$on('eventName', function (event, args) {
 $scope.reset.emailId = args.message;
 });

    $scope.resetPass = function (customer) {
    	console.log("vendor obj:",customer);
        Data.put('vendorresetPass', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
             console.log("vendor success:",results); 

            }
            $scope.reset.password ='';
            $scope.reset.newpassword='';
            $scope.reset.confirmPassword='';
        });
         $scope.userForm.$setPristine();
    };

/*vendor Profile info*/
$rootScope.$on('eventName', function (event, args) {
 $scope.data.emailId = args.message;
     Data.post('getvendordetails', {
      customer: $scope.data
    }).then(function (results) {
      if (results.status == "success") {
         $scope.vendorsList=results.data;
        } 
    });
 });


    $('[data-toggle="tooltip"]').tooltip();    
});
