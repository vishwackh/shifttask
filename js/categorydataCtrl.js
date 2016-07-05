
app.controller('categorydataCtrl', function ($scope,$filter, $rootScope, $routeParams, $location, $http, Data) {

$scope.homesubList=['livingroom','bedroom','kitchen'];
$scope.furnsubList=['sofas','chairs','dining tables and sets'];
$scope.applsubList=['kitchen appliances','electronic appliances','home appliances'];
$scope.vehisubList=['livingroom1','bedroom2','kitchen3'];
$scope.homedata = {};
$scope.furndata = {};
$scope.appldata = {};
$scope.vehidata = {};

$scope.hdata = {};
$scope.delobj={};

$scope.homeList = [];
$scope.furnitureList = [];
$scope.applianceList = [];
$scope.vehicleList = [];

/*Edit model popups*/
$scope.edithome = function(x){
$scope.hdata= angular.copy(x);
$scope.hdata.catgoryname = x.catgoryname && x.catgoryname.trim ? x.catgoryname.trim() : '';
$('#editmodel').modal('show');
};
$scope.editfurn = function(x){ 
$scope.hdata= angular.copy(x);
$scope.hdata.catgoryname = x.catgoryname && x.catgoryname.trim ? x.catgoryname.trim() : '';
$('#editmodel').modal('show');
};
$scope.editappl = function(x){ 
$scope.hdata= angular.copy(x);
$scope.hdata.catgoryname = x.catgoryname && x.catgoryname.trim ? x.catgoryname.trim() : '';
$('#editmodel').modal('show');
};
$scope.editvehi = function(x){ 
$scope.hdata= angular.copy(x);
$scope.hdata.catgoryname = x.catgoryname && x.catgoryname.trim ? x.catgoryname.trim() : '';
$('#editmodel').modal('show');
};

/*delete model popups*/
$scope.deletehome = function(x){
$scope.delobj = x;
$('#deletemodel').modal('show');
};	
$scope.deletefurn = function(x){
$scope.delobj = x;
$('#deletemodel').modal('show');
};
$scope.deleteappl = function(x){
$scope.delobj = x;
$('#deletemodel').modal('show');
};
$scope.deletevehi = function(x){
$scope.delobj = x;
$('#deletemodel').modal('show');
};
/*--------------------------------------------Home Category API Calls -----------------------------------------------*/
/*get all homecategory records*/
Data.get('gethomedata').then(function (results) {
	$scope.homeList = results.data;
});		

/*add record to home Category*/
$scope.addhomecatdata = function (customer) {
        Data.post('addhomeitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('gethomedata').then(function (results) { $scope.homeList = results.data; });
            } 
            $scope.homedata.catgoryname = '';  
            $scope.homedata.name = ''; 
        });
        $scope.userForm.$setPristine();
    };
/*update record in home Category*/
$scope.edithomecatdata = function (customer) {
        Data.put('updatehomeitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('gethomedata').then(function (results) { $scope.homeList = results.data; });
              $('#editmodel').modal('hide');
            }            
        });
};	

/*delete record in home Category*/
$scope.deletehomerecord = function(customer){
	console.log('cust ',customer);
	// '/roles/' + roleid, {params: {userId: userID}}
        Data.delete('deletehomeitem', {
        	params : {
            	id: customer.id
        	}
        }).then(function (results) {
        	console.log('res ',results);
            Data.toast(results);
          if (results.status == "success") {
              Data.get('gethomedata').then(function (results) { $scope.homeList = results.data; });
              $('#deletemodel').modal('hide');
            } 
        });
};
/*--------------------------------------------Furniture Category API Calls -----------------------------------------------*/
/*get all furniturecategory records*/

Data.get('getfurnituredata').then(function (results) {
	$scope.furnitureList = results.data;
});	

/*add record to Furniture Category*/
$scope.addfurncatdata = function (customer) {
        Data.post('addfurnitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
        				Data.get('getfurnituredata').then(function (results) {
        					$scope.furnitureList = results.data;
        				});	 
                $scope.furndata.catgoryname = '';  
                $scope.furndata.name = '';
            } 
        });
      $scope.userForm.$setPristine();
    };

/*update record in Furniture Category*/
$scope.editfurncatdata = function (customer) {
        Data.put('updatefurnitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getfurnituredata').then(function (results) { $scope.furnitureList = results.data; });
              $('#editmodel').modal('hide');
            }            
        });
};

/*delete record in Furniture Category*/
$scope.deletefurnrecord = function(customer){
  console.log('cust ',customer);
        Data.delete('deletefurnitem', {
          params : {
              id: customer.id
          }
        }).then(function (results) {
          console.log('res ',results);
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getfurnituredata').then(function (results) { $scope.furnitureList = results.data; });
              $('#deletemodel').modal('hide');
            } 
        });
};
/*--------------------------------------------Appliance Category API Calls -----------------------------------------------*/
/*get all Appliance records*/
Data.get('getaplidata').then(function (results) {
  $scope.applianceList = results.data;
});   

/*add record to Appliance Category*/
$scope.addaplicatdata = function (customer) {
        Data.post('addapliitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getaplidata').then(function (results) { $scope.applianceList = results.data; });
            } 
            $scope.appldata.catgoryname = ''; 
            $scope.appldata.name = '';
        });
        $scope.userForm.$setPristine();
    };
/*update record in Appliance Category*/
$scope.editaplicatdata = function (customer) {
        Data.put('updateapliitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getaplidata').then(function (results) { $scope.applianceList = results.data; });
              $('#editmodel').modal('hide');
            }            
        });
};  

/*delete record in Appliance Category*/
$scope.deleteaplirecord = function(customer){
  console.log('cust ',customer);
        Data.delete('deleteapliitem', {
          params : {
              id: customer.id
          }
        }).then(function (results) {
          console.log('res ',results);
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getaplidata').then(function (results) { $scope.applianceList = results.data; });
              $('#deletemodel').modal('hide');
            } 
        });
};

/*--------------------------------------------Vehicle Category API Calls -----------------------------------------------*/
/*get all Vehicle records*/
Data.get('getvehidata').then(function (results) {
  $scope.vehicleList = results.data;
});   

/*add record to Vehicle Category*/
$scope.addvehicatdata = function (customer) {
        Data.post('addvehiitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getvehidata').then(function (results) { $scope.vehicleList = results.data; });
            } 
            $scope.vehidata.catgoryname = '';  
            $scope.vehidata.name = ''; 
        });
        $scope.userForm.$setPristine();
    };
/*update record in Vehicle Category*/
$scope.editvehicatdata = function (customer) {
        Data.put('updatevehiitem', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getvehidata').then(function (results) { $scope.vehicleList = results.data; });
              $('#editmodel').modal('hide');
            }            
        });
};  

/*delete record in Vehicle Category*/
$scope.deletevehirecord = function(customer){
  console.log('cust ',customer);
        Data.delete('deletevehiitem', {
          params : {
              id: customer.id
          }
        }).then(function (results) {
          console.log('res ',results);
            Data.toast(results);
          if (results.status == "success") {
              Data.get('getvehidata').then(function (results) { $scope.vehicleList = results.data; });
              $('#deletemodel').modal('hide');
            } 
        });
};
/*angular-table Configuration*/
  $scope.config = {
    itemsPerPage: 10,
    fillLastPage: false
  }
  

});