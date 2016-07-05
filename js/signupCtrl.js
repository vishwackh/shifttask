app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data,$facebook) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
    $scope.signup = {};
	$scope.forgot ={};
    $scope.doLogin = function (customer) {
        Data.post('login', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                if(results.name == "admin")
                  {
                    $location.path('dashboard');  
                  } 
                  else{
                     $location.path('home'); 
                  } 
              
            }
        });
    };
    $scope.signup = {email:'',password:'',name:'',phone:'',address:''};
    $scope.signUp = function (customer) {
        Data.post('signUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('home');
            }
        });
    };

 if($rootScope.$state.$current.name == 'logout')
	  {
		Data.get('logout').then(function (results) {
		        Data.toast(results);
		        $location.path('login');
		    });
	  }  
  $scope.forgot ={emailId:''};
    $scope.doForgotpass = function (customer) {
    };
$scope.gemail='';
//facebook login
    $scope.isLoggedIn = false;
      $scope.loginfb = function() {
        $facebook.login().then(function() {
          refresh();
        });
      }
      function refresh() {
        $facebook.api("/me?fields=id,name,email,permissions").then(
          function(response) {
            console.log("username",response.name);
            $scope.fbemail = response.email;
            $scope.isLoggedIn = true;
            console.log("Email",$scope.fbemail);
          },
          function(err) {
            $scope.welcomeMsg = "Please log in";
          });
      }

      refresh();

// Google login
$scope.$on('event:google-plus-signin-success', function (event, authResult) {
          // User successfully authorized the G+ App!
          console.log('Signed in!');
          console.log("google username",authResult.wc.wc);
          console.log("google email",authResult.wc.hg);
          $scope.gemail = authResult.wc.hg;
          $scope.isLoggedIn = true;

        });
$scope.$on('event:google-plus-signin-failure', function (event, authResult) {
  // User has not authorized the G+ App!
  console.log('Not signed into Google Plus.');
});
	  
});