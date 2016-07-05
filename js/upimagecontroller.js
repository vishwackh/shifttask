app.controller('uploadbyimageCtrl',function($scope,$http,$rootScope,localStorageService,$state){
  $scope.img ={};
  $scope.show = function(x){
  $scope.img = x;
  $('#imagemodel').modal('show');
  };

               $scope.single = function(image) {

                    var formData = new FormData();

                    formData.append('image', image, image.name);

                    $http.post('upload', formData, {
                        headers: { 'Content-Type': false },
                        transformRequest: angular.identity
                    }).success(function(result) {
                        $scope.uploadedImgSrc = result.src;
                        $scope.sizeInBytes = result.size;
                    });
                };

			 $scope.submitimages = function (images) {
        //  for(var i=0;i<images.length;i++){
        //   $rootScope.upImages.push({thum:images[i].url,img:images[i].url});
        //  }
			    $rootScope.upImages=images;

			    console.log($rootScope.upImages.length);
				$state.go('submitdatabyimage');

			 };


});
