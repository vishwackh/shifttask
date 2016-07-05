app.controller('vendorboardCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {

$scope.logout = function(){
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('home');
        });
}

});