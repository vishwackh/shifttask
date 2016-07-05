app.controller('taskbobCtrl',function($scope,$http,$rootScope,taskFactory,$timeout,localStorageService,Data){
$scope.data_home=[];
$scope.data_fur=[];
$scope.data_app=[];
$scope.data_veh=[];
$scope.data=[];
$scope.subcateitem=[];
$scope.categoryshow = 'home';
$scope.activeValue = '';
$scope.maincategory=['home','furniture','applicanes','vehicles'];

	var itemStore = localStorageService.get('mainCart');

	$rootScope.mainCart= itemStore || [];

    $scope.$watch('mainCart', function () {
      localStorageService.set('mainCart', $scope.mainCart);
    }, true);


   Data.get('gethomedata', {
	}).then(function (results) {
	if (results.status == "success") {
		 $scope.data_home = results.data;
		$scope.data=$scope.data_home;
		$scope.subcateitem=$scope.data_home[0].catgoryname;
	}
	});


    //home json click
	$scope.fetchdata=function(key){
		$scope.subcateitem=key;
		$scope.activeValue = key;
	}

	//main category click
	$scope.fetchmaindata=function(mainCategory){

			if(mainCategory=='home'){
				$scope.data=$scope.data_home;
				$scope.subcateitem=$scope.data_home[0].catgoryname;
				$scope.categoryshow = 'home';
				$scope.activeValue = $scope.data_home[0].catgoryname;
				console.log($scope.data_home[0].catgoryname)
			}
			else if(mainCategory=='furniture'){
				$scope.data=$scope.data_fur;
				$scope.subcateitem=$scope.data_fur[0].catgoryname;
				$scope.categoryshow = 'furniture';
				$scope.activeValue = $scope.data_fur[0].catgoryname;
				console.log($scope.data_fur[0].catgoryname)
			}
			else if(mainCategory=='applicanes'){
				$scope.data=$scope.data_app;
				$scope.subcateitem=$scope.data_app[0].catgoryname;
				$scope.categoryshow = 'applicanes';
				$scope.activeValue = $scope.data_app[0].catgoryname;
			}
			else if(mainCategory=='vehicles'){
				$scope.data=$scope.data_veh;
				$scope.subcateitem=$scope.data_veh[0].catgoryname;
				$scope.categoryshow = 'vehicles';
				$scope.activeValue = $scope.data_veh[0].catgoryname;
			}

	}


	  Data.get('getfurnituredata', {
        }).then(function (results) {

            if (results.status == "success") {
	      		$scope.data_fur=results.data;
            }
        })



	   Data.get('getaplidata', {
        }).then(function (results) {

            if (results.status == "success") {
	      		$scope.data_app=results.data;
            }
        })

	   Data.get('getvehidata', {
        }).then(function (results) {

            if (results.status == "success") {
	      		$scope.data_veh=results.data;
            }
        })

  //add item in cart
  $scope.addItemInCart= function(item){

	console.log(item.name,item.cartcount);
	if(item.name!='undefined' && item.cartcount<=5){
		item.cartcount++;
		if(!checkIfObjectExist(item.id,$rootScope.mainCart)){
			//push a new array
			$rootScope.mainCart.push(item);
		}
	}
  }

	  //reove item in cart
	  $scope.removeItemInCart= function(item){
	  	if(item.cartcount>=1){
	  		item.cartcount--;
		    if(item.cartcount==0)
	  		taskFactory.removeItemFormCart(item);
	  	}
	  }

	  //add item form cart
	  $scope.addItemFromCart = function (item){
	  	if(item.cartcount<=5)
	  	item.cartcount++;
	  }

	  //remove item form cart
	  $scope.removeItemFromCart = function (item){
	  	if(item.cartcount>=1){
	  		item.cartcount--;
	  		if(item.cartcount==0)
	  			taskFactory.removeItemFormCart(item);
	  	}

	  }

	  //delete from cart
	  $scope.deleteFromCart=function(item){

		taskFactory.removeItemFormCart(item);
	  	item.cartcount=0;								
	  }

$scope.booknow = false;
$scope.lastbook = false;
	  if($rootScope.$state.$current.name == 'cart')
	  {
		 $scope.booknow = true;
	  }
	  if($rootScope.$state.$current.name == 'submitdata')
	  {
		 $scope.lastbook = true;
	  }

});



//Function to check if object exist with the given properties
function checkIfObjectExist(id,obj)
{
for(var i=0;i<obj.length;i++)
 {
  if(obj[i].id===id)
   {
      return true;
   }
 }
 return false;
}
