define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('CartController', ['$scope','$rootScope','$state','SamService', '$timeout', function ($scope,$rootScope,$state,SamService,$timeout) {

$scope.cartdata=[];
$scope.cartItemAvailability=false;
$scope.OrderId=$rootScope.orderNumber.split("/")[2];

SamService.getCartItems($scope.OrderId).then(function(cartAddedResponse){
	$scope.cartdata=cartAddedResponse.data;
	$scope.cartItemAvailability=true;
	},function(errror){console.log(errror);});
$scope.cartEmpty=true;

$scope.removeCartItem = function(uri,index){
	SamService.removeItem(uri).then(function(itemRemovedResponse){
	console.log(itemRemovedResponse);
	$scope.cartdata.splice(index, 1);
	$rootScope.cartCounter--;
	},function(errror){console.log(errror);});
};
$scope.placementOrder=[];

$scope.placeOrder = function(){
//$scope.succesVar = true;
$scope.placementOrder.push({"uri":"/SAMOrder/"+$scope.cartdata[0].parentOrder.split("/")[2],"placed": false,"shiped": false,"delivered": false});
SamService.getPlacedOrders("/SAMOrder/"+$scope.cartdata[0].parentOrder.split("/")[2]).then(function(placedOrderResponse){
	if(placedOrderResponse.data[0]){
		$scope.temp = parseInt(placedOrderResponse.data[0].uri.split("/")[2].substring(9, placedOrderResponse.data[0].uri.split("/")[2].length));
		console.log("a.."+$scope.temp);
		console.log(placedOrderResponse.data);
		angular.forEach(placedOrderResponse.data, function(value){
			if($scope.temp<parseInt(value.uri.split("/")[2].substring(9, value.uri.split("/")[2].length))){
				$scope.temp = parseInt(value.uri.split("/")[2].substring(9, value.uri.split("/")[2].length));
			}
		});
		$scope.temp++;
		console.log($scope.temp);
		var str = "" + $scope.temp
		var pad = "0000"
		$scope.ans = pad.substring(0, pad.length - str.length) + str;
		$scope.placementOrder.push({"uri":"/SAMOrder/"+$scope.cartdata[0].parentOrder.split("/")[2]+"PON"+$scope.ans,"parentWorkOrder": "/SAMOrder/"+$scope.cartdata[0].parentOrder.split("/")[2]});
		SamService.removeItem($scope.cartdata[0].parentOrder).then(function(itemRemovedResponse){
			},function(errror){console.log(errror);});
		angular.forEach($scope.cartdata, function(value, index){
			SamService.removeItem(value.uri).then(function(itemRemovedResponse){
			},function(errror){console.log(errror);});
			$scope.temp=value;
			$scope.temp.uri = "/SAMOrder/"+$scope.cartdata[index].parentOrder.split("/")[2]+"PON"+$scope.ans+value.uri.split("/")[2].substring(6, value.uri.split("/")[2].length);
			$scope.temp.parentOrder = "/SAMOrder/"+$scope.cartdata[index].parentOrder.split("/")[2]+"PON"+$scope.ans;
			$scope.placementOrder.push($scope.temp);
		});
		SamService.placeOrderService($scope.placementOrder).then(function(placedResponse){
			console.log($scope.placementOrder);
			//$scope.succesVar = false;
			document.getElementById("orderPlacedAlert").style.display='block';
			$timeout(function () {document.getElementById("orderPlacedAlert").style.display='none'; $scope.cartdata=[];}, 1000);//$scope.succesVar = true;
		},function(errror){console.log(errror);});
	}
	else{
		console.log($scope.cartdata[0]);
		$scope.placementOrder.push({"uri":"/SAMOrder/"+$scope.cartdata[0].parentOrder.split("/")[2]+"PON0001","parentWorkOrder": "/SAMOrder/"+$scope.cartdata[0].parentOrder.split("/")[2]});
		SamService.removeItem($scope.cartdata[0].parentOrder).then(function(itemRemovedResponse){
			},function(errror){console.log(errror);});
		angular.forEach($scope.cartdata, function(value, index){
			$scope.temp = {};
			SamService.removeItem(value.uri).then(function(itemRemovedResponse){
			},function(errror){console.log(errror);});
			$scope.temp = value;
			console.dir($scope.temp);
			$scope.temp.uri = "/SAMOrder/"+$scope.cartdata[index].parentOrder.split("/")[2]+"PON0001"+value.uri.split("/")[2].substring(6, value.uri.split("/")[2].length);
			$scope.temp.parentOrder = "/SAMOrder/"+$scope.cartdata[index].parentOrder.split("/")[2]+"PON0001";
			$scope.placementOrder.push($scope.temp);
		});
		SamService.placeOrderService($scope.placementOrder).then(function(placedResponse){
			document.getElementById("orderPlacedAlert").style.display='block';
			$timeout(function () { document.getElementById("orderPlacedAlert").style.display='none'; $scope.cartdata=[];}, 1000);
		},function(errror){console.log(errror);});
	}
},function(error){});
	

};

$scope.function1 = function(role){
    
     if (role.length <1)
          return false;
     else
          return true;
};

$scope.getAssetName=function(uri){
$scope.AssetName=uri.split("/");
return $scope.AssetName[2];
};
$scope.getNetAmount = function(){
$scope.total=0;
	angular.forEach($scope.cartdata, function(value){
	$scope.total = $scope.total+(value.qty*value.unitcost);
	});
	return $scope.total;
};
$scope.checkOut = function(){
	SamService.checkOutService($scope.OrderId).then(function(checkOutResponse){
	console.log(checkOutResponse);
	},function(errror){console.log(errror);});
};
$scope.navigateToBomPage = function(){
$state.go('BOMcreation');
};

$scope.del = function(){
	SamService.aaa().then(function(i){
		angular.forEach(i.data, function(value){
			SamService.removeItem(value.uri).then(function(itemRemovedResponse){
			},function(errror){console.log(errror);});
		});
	},function(errror){console.log(errror);});
};
$scope.navigateToBOM = function(){
	$state.go('BOMcreation');
};



}]); //End Of Controller
});
