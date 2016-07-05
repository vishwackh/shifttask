app.factory('taskFactory', function($rootScope) {
     
    var factory = {}; 
 
    factory.removeItemFormCart = function(item) {

    		var listToDelete=[];
			listToDelete.push(item.id);
            for(var i = 0; i < $rootScope.mainCart.length; i++) {
		    var obj = $rootScope.mainCart[i];

		    if(listToDelete.indexOf(obj.id) !== -1) {
		    	$rootScope.mainCart[i].cartCount=0;
		        $rootScope.mainCart.splice(i, 1);
		    }
		}		
        }
 
    factory.method2 = function() {
            
        }
 
    return factory;
});