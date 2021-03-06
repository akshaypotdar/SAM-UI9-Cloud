define(['angular', './sample-module'], function (angular, controllers) {

    'use strict';



    // Controller definition

    controllers.controller('ServiceHistoryController', ['$scope','$state','$http','$stateParams','$rootScope','SamService', function ($scope,$state,$http,$stateParams,$rootScope,SamService) {
$scope.myVar = false;
 $scope.toggle = function() {
        $scope.myVar = true;
    $(".ServiceDiv").removeClass("col-xs-12");
	$(".ServiceDiv").removeClass("col-sm-12").addClass("col-sm-7");
	$(".ServiceDiv").removeClass("col-md-12").addClass("col-md-7");
	$(".ServiceDiv").removeClass("col-lg-12").addClass("col-lg-7");
    };

 $scope.wob = false;
$scope.orderPartsVar=true;

$scope.OP="fa-check";



		$scope.itemsByPage=6;

		$scope.itemsByBom=6;



$scope.loadServiceDetails= function(consignmentURI) {
$scope.orderPartsVar= false;
	$scope.orderNo=consignmentURI.split("/")[2];

	SamService.getOrderForThisOrder($scope.orderNo).then(function(orderList){
		$scope.rowCollection2 = orderList.data;
		$scope.orderPartsVar=true;
	},function(error){console.log(error);});

};

$scope.getConignments = function(uri){
$scope.spinner=false;
$scope.consignments = [];
SamService.getConsignmentService(uri.split("/")[2]).then(function(consignmentList){
$scope.spinner=true;
	$scope.consignments = consignmentList.data;
},function(error){console.log(error);});
}


SamService.getWorkOrderList($rootScope.orderNumber).then(function(workOrderResponse){
	$scope.rowCollection = workOrderResponse.data;
	angular.forEach(workOrderResponse.data, function(value){
		SamService.getOrderTrackStatus(value.uri.split("/")[2]).then(function(orderList){
			value.placed = orderList.data[0].placed;
			value.shiped = orderList.data[0].shiped;
			value.delivered = orderList.data[0].delivered;
		},function(error){console.log(error);});
	});
	$scope.wob = true;
},function(error){console.log(error);});


 }]); //End Of Controller

});

