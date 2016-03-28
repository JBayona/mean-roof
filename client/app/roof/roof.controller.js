'use strict';

angular.module('roofApp')
  .controller('RoofCtrl', ['$scope','$http','$timeout',function ($scope,$http,$timeout) {
     $scope.message = 'Hello';
     $scope.user = [];
     $scope.requestProcessed = false;
     $scope.submitted = false;

    $scope.sayHello = function(){
    	alert($scope.message);
    };

    $scope.sendMail = function(){
    		//$scope.submitted=true;
	    	var information = {
	    		name: $scope.user.name,
	    		address: $scope.user.address,
	    		city: $scope.user.city,
	    		state: $scope.user.state,
	    		zip: $scope.user.zip,
	    		phone: $scope.user.phone,
	    		email: $scope.user.email
	    	};


	    	$http.post('/contact-form',information) //Expose the API in the server side
	    		.success(function(data,status,headers,config){
	    			console.log("Success");
	    			console.log(data);
	    			$scope.user = [];
	    			$scope.requestProcessed = true;
	    			$scope.userData.$setPristine();
	    			$timeout(function(){
	    				$scope.requestProcessed = false;
	    			},3000);

	    		})
	    		.error(function(data,status,headers,config){
	    			console.log("Error");
	    	});
    }
  }]);
