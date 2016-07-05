app.controller('dashboardCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

 if($rootScope.$state.$current.name == 'logout')
	  {
		Data.get('logout').then(function (results) {
		        Data.toast(results);
		        $location.path('login');
		    });
	  } 

});	