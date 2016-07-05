app.controller('addlocationCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

$scope.locationList = [];

$scope.ldata = {};

$scope.hdata = {};
$scope.delobj={};

/*Edit model popups*/
$scope.editlocation = function(x){
$scope.hdata= angular.copy(x);
$scope.hdata.name = x.name && x.name.trim ? x.name.trim() : '';
$('#editmodel').modal('show');
};

/*delete model popups*/
$scope.deletelocation = function(x){
$scope.delobj = x;
console.log("delete record",x);
$('#deletemodel').modal('show');
};	

/*--------------------------------------------location API Calls -----------------------------------------------*/
/*get all location records*/
Data.get('getlocationdata').then(function (results) {
	$scope.locationList = results.data;
});		

/*add record to home Category*/
$scope.addlocationdata = function (customer) {
        Data.post('addlocationitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getlocationdata').then(function (results) { $scope.locationList = results.data; });
            } 
            $scope.ldata.name = '';  

        });
        $scope.userForm.$setPristine();
    };
/*update record in home Category*/
$scope.editlocationcatdata = function (customer) {
        Data.put('updatelocationitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getlocationdata').then(function (results) { $scope.locationList = results.data; });
              $('#editmodel').modal('hide');
            }            
        });
};	

/*delete record in home Category*/
$scope.deletelocationrecord = function(customer){
	console.log('cust ',customer);
	// '/roles/' + roleid, {params: {userId: userID}}
        Data.delete('deletelocationitem', {
        	params : {
            	id: customer.id
        	}
        }).then(function (results) {
        	console.log('res ',results);
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getlocationdata').then(function (results) { $scope.locationList = results.data; });
              $('#deletemodel').modal('hide');
            } 
        });
};
/*angular-table Configuration*/
  $scope.config = {
    itemsPerPage: 5,
    fillLastPage: false
  }
});