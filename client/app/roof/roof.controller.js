'use strict';

angular.module('roofApp')
  .controller('RoofCtrl', ['$scope','$http','$timeout',function ($scope,$http,$timeout) {
     $scope.message = 'Hello';
     $scope.user = [];
     $scope.requestProcessed = false;

    $scope.sayHello = function(){
    	alert($scope.message);
    };

    $scope.sendMail = function(){

	    	var information = {
	    		name: $scope.user.name,
	    		address: $scope.user.address,
	    		city: $scope.user.city,
	    		state: $scope.user.state,
	    		zip: $scope.user.zip,
	    		phone: $scope.user.phone,
	    		email: $scope.user.email
	    	};

	    	//console.log(information);

	    	$http.post('/contact-form',information)
	    		.success(function(data,status,headers,config){
	    			console.log("Success");
	    			console.log(data);
	    			$scope.user = [];
	    			$scope.requestProcessed = true;
	    			$timeout(function(){
	    				$scope.requestProcessed = false;
	    			},3000);

	    		})
	    		.error(function(data,status,headers,config){
	    			console.log("Error");
	    	});
    	}
  }]);
