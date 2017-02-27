define(['angular', './sample-module'], function(angular, module) {
    'use strict';

    /**
     * Cube home service is used for all services required for home page
     */
    module.factory('SamService', ['$q', '$http',function($q, $http) {
        	
	         //var connection_Name="";
/*******************Dashboard services************************/
//dash board table details fetching service
	  	var _getChildDataAsset = function(parameter){
      		var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                	var req = {
                	method: 'GET',
						url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/asset?filter=uri='+parameter+'<parent[t1]',
                	headers: {
							'Authorization' : 'Bearer '+r.data.access_token,
                    	'Content-Type': 'application/json',
							'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 	 }
            		 };

            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
			console.log("asset data error: "+error.status);
                	//deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
	};


	var _getChildDataOrder = function(parameter){
      		var deferred = $q.defer();
		var req1 = {
                	method: 'POST',
			url: 'https://assetuaa.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token',
			data: 'grant_type=client_credentials',
                	headers: {
                    	'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization' : 'Basic YXNzZXRfY2xpZW50OmFzc2V0Q2xpZW50'
                	 	 }
            		 };

            	$http(req1)
            	.then(function(response){
			var accessToken=response.data.access_token;
                	var req = {
                	method: 'GET',
			url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder?filter=partname='+parameter+'<parent[t1]',
                	headers: {
			'Authorization' : 'Bearer '+accessToken,
                    	'Content-Type': 'application/json',
			'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 	 }
            		 };

            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
			console.log("asset data error: "+error.status);
                	//deferred.reject('Error fetching Options' + error);
            	});
            	}, function(error){
			console.log("oauth error");
                	//deferred.reject('Error fetching Options' + error);
            	});
	return deferred.promise;
	};
var _getAssetParent = function(uri){
	var deferred = $q.defer();
	_getAccessTokens().then(function(r){
                	var req = {
                	method: 'GET',
						url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io'+uri,
                	headers: {
							'Authorization' : 'Bearer '+r.data.access_token,
                    	'Content-Type': 'application/json',
							'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 	 }
            		 };
            	$http(req)
            	.then(function(response){
						deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
	};
	var _getSingleOrder = function(parameter){
      		var deferred = $q.defer();
		var req1 = {
                	method: 'POST',
			url: 'https://assetuaa.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token',
			data: 'grant_type=client_credentials',
                	headers: {
                    	'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization' : 'Basic YXNzZXRfY2xpZW50OmFzc2V0Q2xpZW50'
                	 	 }
            		 };

            	$http(req1)
            	.then(function(response){
			var accessToken=response.data.access_token;
                	var req = {
                	method: 'GET',
			url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder?filter=partname='+parameter,
                	headers: {
			'Authorization' : 'Bearer '+accessToken,
                    	'Content-Type': 'application/json',
			'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 	 }
            		 };

            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
			console.log("asset data error: "+error.status);
                	//deferred.reject('Error fetching Options' + error);
            	});
            	}, function(error){
			console.log("oauth error");
                	//deferred.reject('Error fetching Options' + error);
            	});
	return deferred.promise;
	};

var _getAccessTokens = function(){
	var deferred = $q.defer();
	var req1 = {
		method: 'POST',
		url: 'https://assetuaa.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token',
		data: 'grant_type=client_credentials',
		headers: {
      	'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization' : 'Basic YXNzZXRfY2xpZW50OmFzc2V0Q2xpZW50'
         }
         };
         $http(req1)
         .then(function(response){
         	deferred.resolve(response);
			}, function(error){
				deferred.reject('Error fetching Options' + error);
			});
			return deferred.promise;
};
var _getAllTickets = function(){
      		var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                	var req = {
                	method: 'GET',
						url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAM',
                	headers: {
							'Authorization' : 'Bearer '+r.data.access_token,
                    	'Content-Type': 'application/json',
							'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 	 }
            		 };
            	$http(req)
            	.then(function(response){
						deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
	};
var _getAssetUri = function(orderId){
	var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io'+orderId,
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};

var _putNote = function(noteObj){
	var deferred = $q.defer();
	_getAccessTokens().then(function(r){
		var req = {
      method: 'PUT',
		url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io'+noteObj.uri,
      headers: {
			'Authorization' : 'Bearer '+r.data.access_token,
			'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329',
      	'Content-Type': 'application/json'
      	},
      data: noteObj
      };
      $http(req)
      .then(function(response){
			deferred.resolve(response);
      }, function(error){
      	deferred.reject(error);
      });},function(e){console.log(e);});
   return deferred.promise;
};

var _addToCartService = function(cartItems){
		var deferred = $q.defer();
	_getAccessTokens().then(function(r){
		var req = {
      method: 'POST',
		url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/Cart',
      headers: {
			'Authorization' : 'Bearer '+r.data.access_token,
			'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329',
      	'Content-Type': 'application/json'
      	},
      data: cartItems
      };
      $http(req)
      .then(function(response){
			deferred.resolve(response);
      }, function(error){
      	deferred.reject(error);
      });},function(e){console.log(e);});
   return deferred.promise;
};

var _getCartItems = function(cartOrderId){
	var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/Cart?filter=uri=/Cart/'+cartOrderId+'<parentOrder[t1]',
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};

var _removeItem = function(uri){
		var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'DELETE',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io'+uri,
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};

var _getLatestDate = function(uri){
	var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/system/audit?filter=identifier='+uri,
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};

var _getWorkOrderList = function(uri){
	var deferred = $q.defer();
	_getAssetUri(uri).then(function(obj){
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAM?filter=EquipmentId='+obj.data[0].EquipmentId,
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
            },function(objError){});
	return deferred.promise;
};

var _getOrderForThisOrder = function(orderNo){
		var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder?filter=uri=/SAMOrder/'+orderNo+'<parentOrder[t1]',
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};

var _getOrderTrackStatus = function(num){
	var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder/'+num,
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};

var _placeOrderService = function(placedData){
			var deferred = $q.defer();
	_getAccessTokens().then(function(r){
		var req = {
      		method: 'POST',
		url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder',
      		headers: {
			'Authorization' : 'Bearer '+r.data.access_token,
			'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329',
      			'Content-Type': 'application/json'
      			},
      		data: placedData
      		};
      $http(req)
      .then(function(response){
		deferred.resolve(response);
      }, function(error){
      	deferred.reject(error);
      });},function(e){console.log(e);});
   return deferred.promise;
};

var _getPlacedOrders = function(uri){
	var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder?filter=uri='+uri+'<parentWorkOrder',
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};
var _getConsignmentService = function(uri){
	var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder?filter=uri=/SAMOrder/'+uri+'<parentWorkOrder[t1]',
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};

var _aaa = function(){
	var deferred = $q.defer();
      		_getAccessTokens().then(function(r){
                var req = {
                	method: 'GET',
				url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAMOrder',
                	headers: {
				'Authorization' : 'Bearer '+r.data.access_token,
                    		'Content-Type': 'application/json',
				'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 }
            	};
            	$http(req)
            	.then(function(response){
			deferred.resolve(response);
            	}, function(error){
                	deferred.reject('Error fetching Options' + error);
            	});},function(e){});
	return deferred.promise;
};
/*******************return statements of service procedures************************/
        return {
			getChildDataAsset : _getChildDataAsset,
			getChildDataOrder : _getChildDataOrder,
			getSingleOrder : _getSingleOrder,
			getAccessTokens : _getAccessTokens,
			getAllTickets : _getAllTickets,
			getAssetParent : _getAssetParent,
			getAssetUri : _getAssetUri,
			putNote : _putNote,
			addToCartService : _addToCartService,
			getCartItems : _getCartItems,
			removeItem : _removeItem,
			getLatestDate : _getLatestDate,
			getWorkOrderList : _getWorkOrderList,
			getOrderForThisOrder : _getOrderForThisOrder,
			getOrderTrackStatus : _getOrderTrackStatus,
			placeOrderService : _placeOrderService,
			getPlacedOrders : _getPlacedOrders,
			getConsignmentService : _getConsignmentService,
			aaa : _aaa
     };
    }]);
});

