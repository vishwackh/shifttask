<!DOCTYPE html>
<html lang="en" ng-app="taskbobApp">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Task BOB</title>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/bootstrap-datepicker.min.css" rel="stylesheet">
    <link href="css/toaster.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body ng-cloak="">
    <div class="pre-header" ng-show='type == "user"'>
        <div class="container">
            <div class="row">
                <!-- BEGIN TOP BAR LEFT PART -->
                <div class="col-md-6 col-sm-6 additional-shop-info">
                    <ul class="list-unstyled list-inline">
                        <li><i class="fa fa-phone icontheme"></i><span>+91 99865 52521</span></li>
                        <li><i class="fa fa-envelope-o icontheme"></i><span>info@example.com</span></li>
 <li class="bidicons">                  
<a href="" target="_blank" class="btn-social btn-facebook"><i class="fa fa-facebook"></i></a>
</li><li class="bidicons">
<a href="" target="_blank" class="btn-social btn-google-plus"><i class="fa fa-google-plus"></i></a>  </li><li class="bidicons">   
<a href="" target="_blank" class="btn-social btn-twitter"><i class="fa fa-twitter"></i></a>
</li><li class="bidicons">
<a href="" target="_blank" class="btn-social btn-email"><i class="fa fa-envelope"></i></a>
</li><li class="bidicons">
<a href="" target="_blank" class="btn-social btn-youtube"><i class="fa fa-youtube"></i></a>  
</li>
</ul>              
                </div>
                <!-- END TOP BAR LEFT PART -->
                <!-- BEGIN TOP BAR MENU -->
                <div class="col-md-6 col-sm-6 additional-nav">
                    <ul class="list-unstyled list-inline pull-right">
                        <li>Vendor <i class="fa fa-long-arrow-right bblue" aria-hidden="true"></i></li>
                        <li><a ui-sref="vendorlogin">Log In</a></li>
                        <li><a ui-sref="vendorsignup">Registration</a></li>
                    </ul>
                </div>
                <!-- END TOP BAR MENU -->
            </div>
        </div>        
    </div>  

 <nav class="navbar navbar-default navbar-static-top" ng-show='type == "vendor"'>
    <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" ui-sref="vendorboard">
      Task BOB
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-3">    
<ul class="nav navbar-nav navbar-right" > 
<li ng-show="authenticated" ng-class="{active: $state.includes('vendorpassreset')}"><a ui-sref="vendorpassreset" > 
<i class="fa fa-key" aria-hidden="true"></i> Reset Password</a></li>

<li ng-show="authenticated" ng-class="{active: $state.includes('vendoreditprofile')}"><a ui-sref="vendoreditprofile" > 
<i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Profile</a></li>    
   
<li ng-show="authenticated" ><a ui-sref="logout" ng-click="logout()"> 
<i class="fa fa-sign-out" aria-hidden="true"></i> logout</a></li>
  </ul>
    </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

 <nav class="navbar navbar-default navbar-static-top" ng-show='type == "admin"'>
    <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" ui-sref="dashboard">
      Task BOB
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">    
    <ul class="nav navbar-nav navbar-right" >  
    <li ng-show="authenticated" ng-class="{active: $state.includes('dashboard')}"><a ui-sref="dashboard" > <span class="glyphicon glyphicon-home"></span></a></li>
    <li ng-show="authenticated" ng-class="{active: $state.includes('users')}"><a ui-sref="users" > Users</a></li> 
    <li ng-show="authenticated" ng-class="{active: $state.includes('categorydata')}"><a ui-sref="categorydata" > Category</a></li> 
    <li ng-show="authenticated" ng-class="{active: $state.includes('addlocation')}"><a ui-sref="addlocation" > Add Location</a></li>   
    <li ng-show="authenticated" ng-class="{active: $state.includes('travelservice')}"><a ui-sref="travelservice" > Travel Services</a></li>       
    <li ng-show="authenticated" ><a ui-sref="logout" ng-click="logout()" > 
    <i class="fa fa-sign-out" aria-hidden="true"></i> logout</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav> 

<nav class="navbar navbar-default navbar-static-top" ng-show='type == "user"'>
    <div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		<button type="button" ng-class="{hide: first}" class="navbar-toggle navbar-toggle-sidebar collapsed dpindex">
			MENU
			</button>
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" ui-sref="home">
			Task BOB
			</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">      
		<ul class="nav navbar-nav navbar-right" >
				<li ng-class="{active:$state.includes('home')}"><a ui-sref="home"><span class="glyphicon glyphicon-home icontheme"></span></a></li>
				<li ng-class="{active: $state.includes('userstatus')}"><a ui-sref="userstatus" ><i class="fa fa-inbox icontheme" aria-hidden="true"></i> Order Status</a></li>
				<li ng-class="{active: $state.includes('cart')}"><a ui-sref="cart" ><i class="fa fa-shopping-cart f18 icontheme" aria-hidden="true"></i> <span class='badge cartbadge'>{{mainCart.length}}</span> Cart</a> </li>

  			<li ng-show="!authenticated" ng-class="{active: $state.includes('login')}"><a ui-sref="login" ><i class="fa fa-sign-in icontheme" aria-hidden="true"></i> Login</a></li>
  			<li ng-show="!authenticated" ng-class="{active: $state.includes('signup')}"><a ui-sref="signup" > <i class="fa fa-user icontheme" aria-hidden="true"></i> User Registration</a></li>
        <li ng-show="authenticated" ><a ui-sref="logout" ng-click="logout()" > 
        <i class="fa fa-sign-out" aria-hidden="true"></i>logout</a></li>
			</ul>
		</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
	</nav>  	

<div ui-view></div>
 <toaster-container toaster-options="{'time-out': 3000,'position-class': 'toast-bottom-left','close-button':true}"></toaster-container>
 
   		<footer class="pull-left footer" id="footer">
		    <div class="navbar navbar-inverse"> 
  			<div class="container">
            <div class="navbar-collapse collapse" id="footer-body">
                <ul class="nav navbar-nav">              
                    <li><a ui-sref="aboutus">About Us</a></li>
                    <li><a ui-sref="contactus">Contact Us</a></li>
                    <li><a ui-sref="termsconditions">Terms &amp; Conditions</a></li>
                    <li><a ui-sref="privacypolicy">Privacy Policy</a></li>
                </ul>

            </div>
          	<div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#footer-body">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
  			</div>
			</div>
  		</footer>
  
	
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
	<script>
$(function () {
  	$('.navbar-toggle-sidebar').click(function () {
  		$('.navbar-nav').toggleClass('slide-in');
  		
  	});
	
 if (window.matchMedia('(max-width: 767px)').matches) {
       console.log('hello G');  
 }
/*  if (Modernizr.mq('(max-width: 767px)')) {
      console.log('hello');
} */
  });	
	
	</script>
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/angular-route.js"></script>
	<script type="text/javascript" src="js/angular-ui-router.min.js"></script>
	<script src="js/angular-cookies.js"></script>
	<script type="text/javascript" src="js/angular-local-storage.min.js"></script>
  <script src="js/satellizer.min.js"></script>  
  <script src="js/bootstrap-datepicker.js" type="text/javascript"></script> 
  <script src="js/angular-animate.js"></script>
  <script src="js/ui-bootstrap-tpls-1.3.3.js"></script> 
  <script src="js/toaster.js"></script>
  <script src="js/angular-table.min.js"></script>
  <script type="text/javascript" src="js/ngFacebook.js"></script>
  <script type="text/javascript" src="js/google-plus-signin.js"></script>
  <script type="text/javascript" src="js/ngGallery.js"></script>
  
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/config.js"></script>
  <script type="text/javascript" src="js/data.js"></script>
	<script type="text/javascript" src="js/factory.js"></script>
	<script type="text/javascript" src="js/controller.js"></script>
	<script type="text/javascript" src="js/upimagecontroller.js"></script> 
	<script type="text/javascript" src="js/imageupload.js"></script>
	<script type="text/javascript" src="js/homeCtrl.js"></script>
  <script type="text/javascript" src="js/userstatusCtrl.js"></script>
  <script type="text/javascript" src="js/signupCtrl.js"></script>
  <script type="text/javascript" src="js/submitdataCtrl.js"></script>
  <script type="text/javascript" src="js/dashboardCtrl.js"></script>
  <script type="text/javascript" src="js/usersCtrl.js"></script>
  <script type="text/javascript" src="js/categorydataCtrl.js"></script>
  <script type="text/javascript" src="js/addlocationCtrl.js"></script>
  <script type="text/javascript" src="js/travelserviceCtrl.js"></script>
  <script type="text/javascript" src="js/vendorsignup.js"></script>
  <script type="text/javascript" src="js/vendorboardCtrl.js"></script>
  <script type="text/javascript" src="js/vendorOtherCtrl.js"></script>
  <script type="text/javascript" src="js/otherCtrl.js"></script>

	<script type="text/javascript" src="js/passwordMatch.js"></script>
	<script type="text/javascript" src="js/passwordStrength.js"></script>
   <script src="liblary/angularunique.js"></script>


  </body>
</html>