app.controller('vendorsignupCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.successmsg='';
    $scope.login = {};
    $scope.signup = {};

    $scope.doLogin = function (customer) {
        Data.post('vendorlogin', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                    $location.path('vendorboard');   
                    console.log("vendor In");          
            }
        });
    };

    $scope.signup = {name:'',pannumber:'',emailId:'',mobilenumber:'',address:'',area:'',city:'',states:'',pincode:'',password:''};
    $scope.signUp = function (customer) {
        Data.post('vendorsignUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                // $location.path('home');
                $scope.successmsg="Thank you Registring our Portal admin Aprove your Request Soon..";
                $scope.signup = {}; 
            }
        });
        $scope.userForm.$setPristine();
    };

 if($rootScope.$state.$current.name == 'logout')
	  {
		Data.get('logout').then(function (results) {
		        Data.toast(results);
		        $location.path('home');
		    });
	  }      
});