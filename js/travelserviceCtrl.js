app.controller('travelserviceCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

$scope.serviceList = [];

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

/*--------------------------------------------Service API Calls -----------------------------------------------*/
/*get all Service records*/
Data.get('getservicedata').then(function (results) {
	$scope.serviceList = results.data;
});		

/*add record to Service */
$scope.addlocationdata = function (customer) {
        Data.post('addserviceitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getservicedata').then(function (results) { $scope.serviceList = results.data; });
            } 
            $scope.ldata.name = '';  

        });
        $scope.userForm.$setPristine();
    };
/*update record in Service */
$scope.editlocationcatdata = function (customer) {
        Data.put('updateserviceitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getservicedata').then(function (results) { $scope.serviceList = results.data; });
              $('#editmodel').modal('hide');
            }            
        });
};	

/*delete record in Service */
$scope.deletelocationrecord = function(customer){
	console.log('cust ',customer);
	// '/roles/' + roleid, {params: {userId: userID}}
        Data.delete('deleteserviceitem', {
        	params : {
            	id: customer.id
        	}
        }).then(function (results) {
        	console.log('res ',results);
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getservicedata').then(function (results) { $scope.serviceList = results.data; });
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