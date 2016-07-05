app.config(['$stateProvider', '$urlRouterProvider','$locationProvider','$authProvider',function($stateProvider, $urlRouterProvider,$locationProvider,$authProvider){
   
    $urlRouterProvider.otherwise("/home");
  
    $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "views/home.html",
          controller: 'authCtrl' ,
          role: '0'
      })
    $stateProvider
      .state('logout', {
          url: "/logout",
          templateUrl: "views/home.html",
          controller: 'authCtrl' 
      })
    $stateProvider
      .state('signup', {
          url: "/signup",
          templateUrl: "views/singup.html",
          controller: 'authCtrl' 
      })
    $stateProvider
      .state('login', {
          url: "/login",
          templateUrl: "views/login.html",
          controller: 'authCtrl' 
      })	  
      .state('selecttocart', {
            url: "/selecttocart",            
		views: {
			
			'': { 
			     templateUrl: 'views/selectcategory.html',
				 controller: 'taskbobCtrl' 
				 },
			
'One@selecttocart': {
			templateUrl: 'views/maincart.html',
			controller:'taskbobCtrl'
			},
			
'Two@selecttocart': {
			templateUrl: 'views/cart.html',
			controller:'taskbobCtrl'
			}
			
			}			
        })		
      .state('cart', {
            url: "/cart",            
		views: {
			
			'': { 
			     templateUrl: 'views/onlycart.html',
				 controller: 'taskbobCtrl' 
				 },
			
'Cart@cart': {
			templateUrl: 'views/cart.html',
			controller:'taskbobCtrl'
			}
		}
		})
      .state('uploadbyimage', {
          url: "/uploadbyimage",
          templateUrl: "views/uploadbyimage.html",
          controller: 'uploadbyimageCtrl' 
      })		
.state('submitdata', {
            url: "/submitdata",
            views:{
              '':{
                   templateUrl: "views/submitData.html",
                   controller: 'submitdataCtrl' 
              },
              'one@submitdata':{
                  templateUrl: "views/cart.html",
                  controller: 'taskbobCtrl' 
              }
            }
           
        })  
.state('submitdatabyimage', {
            url: "/submitdatabyimage",
            views:{
              '':{
                   templateUrl: "views/submitdataimg.html",
                   controller: 'submitdataCtrl'
              },
              'one@submitdatabyimage':{
                  templateUrl: "views/imagecart.html",
                  controller: 'uploadbyimageCtrl'
              }
            }

        })		
      .state('userstatus', {
          url: "/userstatus",
          templateUrl: "views/userstatus.html",
          controller: 'userstatusCtrl' 
      })
/*Vendor Config*/      	
      .state('vendorsignup', {
          url: "/vendorsignup",
          templateUrl: "views/vendorsignup.html",
          controller: 'vendorsignupCtrl' 
      })
      .state('vendorlogin', {
          url: "/vendorlogin",
          templateUrl: "views/vendorlogin.html",
          controller: 'vendorsignupCtrl' 
      }) 
      .state('vendorboard', {
            url: "/vendorboard",
            params : {
              emailId: '$rootScope.email',
            },           
    views: {      
      '': { 
           templateUrl: 'views/vendorboard.html',
         controller: 'vendorboardCtrl' 
         },
      
'side@vendorboard': {
      templateUrl: 'views/sidebarvendor.html',
      controller:'vendorboardCtrl'
      },
      
'content@vendorboard': {
      templateUrl: 'views/vendorhome.html',
      controller:'vendorboardCtrl'
      }
      
      }     
        }) 
      .state('vendorpassreset', {
            url: "/vendorpassreset",            
    views: {      
      '': { 
           templateUrl: 'views/vendorboard.html',
         controller: 'vendorboardCtrl' 
         },
      
'side@vendorpassreset': {
      templateUrl: 'views/sidebarvendor.html',
      controller:'vendorboardCtrl'
      },
      
'content@vendorpassreset': {
      templateUrl: 'views/vendorresetpass.html',
      controller:'vendorOtherCtrl'
      }
      
      }     
        }) 
      .state('vendoreditprofile', {
            url: "/vendoreditprofile",            
    views: {      
      '': { 
           templateUrl: 'views/vendorboard.html',
         controller: 'vendorboardCtrl' 
         },
      
'side@vendoreditprofile': {
      templateUrl: 'views/sidebarvendor.html',
      controller:'vendorboardCtrl'
      },
      
'content@vendoreditprofile': {
      templateUrl: 'views/vendoreditprofile.html',
      controller:'vendorOtherCtrl'
      }
      
      }     
        })                           
/*Admin Config*/      
      .state('dashboard', {
          url: "/dashboard",
          templateUrl: "views/dashboard.html",
          controller: 'dashboardCtrl' 
      })  
       .state('users', {
          url: "/users",
          templateUrl: "views/users.html",
          controller: 'usersCtrl' 
      })            	
       .state('addlocation', {
          url: "/addlocation",
          templateUrl: "views/addlocation.html",
          controller: 'addlocationCtrl' 
      }) 
      .state('travelservice', {
          url: "/travelservice",
          templateUrl: "views/travelservice.html",
          controller: 'travelserviceCtrl' 
      })       
      .state('categorydata', {
            url: "/categorydata",            
    views: {
      
      '': { 
           templateUrl: 'views/categorydata.html',
         controller: 'categorydataCtrl' 
         },
      
'side@categorydata': {
      templateUrl: 'views/sidebaradmin.html',
      controller:'categorydataCtrl'
      },
      
'content@categorydata': {
      templateUrl: 'views/categoryhome.html',
      controller:'categorydataCtrl'
      }
      
      }     
        })  
      .state('furniture', {
            url: "/furniture",            
    views: {
      
      '': { 
           templateUrl: 'views/categorydata.html',
         controller: 'categorydataCtrl' 
         },
      
'side@furniture': {
      templateUrl: 'views/sidebaradmin.html',
      controller:'categorydataCtrl'
      },
      
'content@furniture': {
      templateUrl: 'views/furniture.html',
      controller:'categorydataCtrl'
      }
      
      }     
        }) 
      .state('applicanes', {
            url: "/applicanes",            
    views: {
      
      '': { 
           templateUrl: 'views/categorydata.html',
         controller: 'categorydataCtrl' 
         },
      
'side@applicanes': {
      templateUrl: 'views/sidebaradmin.html',
      controller:'categorydataCtrl'
      },
      
'content@applicanes': {
      templateUrl: 'views/applicanes.html',
      controller:'categorydataCtrl'
      }
      
      }     
        })  
      .state('vehicles', {
            url: "/vehicles",            
    views: {
      
      '': { 
           templateUrl: 'views/categorydata.html',
         controller: 'categorydataCtrl' 
         },
      
'side@vehicles': {
      templateUrl: 'views/sidebaradmin.html',
      controller:'categorydataCtrl'
      },
      
'content@vehicles': {
      templateUrl: 'views/vehicles.html',
      controller:'categorydataCtrl'
      }
      
      }     
        })
      .state('forgotpassword', {
          url: "/forgotpassword",
          templateUrl: "views/forgotpassword.html",
          controller: 'authCtrl'
      })
      .state('contactus', {
          url: "/contactus",
          templateUrl: "views/contactus.html",
          controller: 'otherCtrl'
      })
      .state('aboutus', {
          url: "/aboutus",
          templateUrl: "views/aboutus.html",
          controller: 'otherCtrl'
      })
      .state('termsconditions', {
          url: "/termsconditions",
          templateUrl: "views/termsconditions.html",
          controller: 'otherCtrl'
      })
      .state('privacypolicy', {
          url: "/privacypolicy",
          templateUrl: "views/privacypolicy.html",
          controller: 'otherCtrl'
      })		


			
  }]).run(function($rootScope, $location, Data,$state,localStorageService) {
        $rootScope.$state = $state; 
        $rootScope.mainCart=[];
        $rootScope.upImages=[];

        $rootScope.gestUrl = ['signup','login','home','submitdata','userstatus','cart','selecttocart','uploadbyimage','vendorsignup','vendorlogin','forgotpassword','contactus','aboutus','termsconditions','privacypolicy','submitdatabyimage'];
        $rootScope.userUrl =['signup','login','dashboard','users','categorydata','furniture','applicanes','vehicles','addlocation','travelservice'];
        $rootScope.adminUrl = ['signup','login','home','submitdata','userstatus','cart','selecttocart','uploadbyimage','submitdatabyimage'];
        $rootScope.vendorUrl = ['login','signup'];
        
        $rootScope.$on("$stateChangeStart", function (event, next, current) {
        $rootScope.authenticated = false;
  
       $rootScope.mainCart= localStorageService.get('mainCart') || [];

 Data.get('session').then(function (results) {
          var nextUrl = $rootScope.$state.$current.name;
          
            $rootScope.first = true;
            if(nextUrl == 'selecttocart'){
              $rootScope.first = false;
            }
           $rootScope.type = results.type;
           console.log( $rootScope.type);
            if (results.uid) {
                $rootScope.authenticated = true;
                $rootScope.uid = results.uid;
                $rootScope.name = results.name;
                $rootScope.email = results.email; 
                 $rootScope.$broadcast('eventName', { message: results.email });
                if(results.type =='admin'){
                  //loops only works in admin login                  
                  if($rootScope.adminUrl.indexOf(nextUrl) !== -1){
                     $location.path("/dashboard");  
                     //it redirects to admin dashboard when admin try to access user page
                  }
                }
                if(results.type =='vendor'){
                  //loops only works in vendor login
                  if($rootScope.vendorUrl.indexOf(nextUrl) !== -1){
                     $location.path("/vendorboard");  
                     //it redirects to vendor dashboard when vendor try to access user page
                  }
                }                
                if(results.type =='user'){
                  //loops only works in user login
                 if($rootScope.userUrl.indexOf(nextUrl) !== -1){ 
                  $location.path("/home");
                  //it redirects to user home when user try to access admin page
                }
                }    
            } else {
                if ($rootScope.gestUrl.indexOf(nextUrl) === -1) {
                   $location.path("/home");
                   console.log('2st loop'); 
                } 
            } 
        });

    });
       // If we've already installed the SDK, we're done
       if (document.getElementById('facebook-jssdk')) {return;}

       // Get the first script element, which we'll use to find the parent node
       var firstScriptElement = document.getElementsByTagName('script')[0];

       // Create a new script element and set its id
       var facebookJS = document.createElement('script');
       facebookJS.id = 'facebook-jssdk';

       // Set the new script's source to the source of the Facebook JS SDK
       facebookJS.src = '//connect.facebook.net/en_US/all.js';

       // Insert the Facebook JS SDK into the DOM
       firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
  });	  