define(['angular', './sample-module'], function (angular, controllers) {
	'use strict';
	// Controller ppdefinition
	controllers.controller('BOMCreationController', ['$scope','$http','$q','SamService','$rootScope','$state','$stateParams','$filter','$timeout',  function ($scope,$http,$q,SamService,$rootScope,$state,$stateParams,$filter,$timeout) {
//My selection new code
$("#front").addClass("grid");
$("#front-ghost").addClass("ghost-select");
$(".big-ghost").remove();



//end of the new selection code



		$scope.loadingRow=true;
		$scope.AssetData=[
			{
				"uri": "/asset/54JK41-fan",
				"partname": "54JK41-fan",
				"parent": "/asset/jetEngine103456",
				"partno": "564",
				"unitcost": "23.88",
				"serviceable": "true"
			}
			,
			{
				"uri": "/asset/645HG-blade",
				"partname": "645HG-blade",
				"parent": "/asset/54JK41-fan",
				"partno": "225",
				"unitcost": "12.5",
				"serviceable": "false"
			}
			,
			{
				"uri": "/asset/blade-1",
				"partname": "blade-1",
				"parent": "/asset/645HG-blade"
			}
			,
			{
				"uri": "/asset/blade-2",
				"partname": "blade-2",
				"parent": "/asset/645HG-blade"
			}
			,
			{
				"uri": "/asset/blade-3",
				"partname": "blade-3",
				"parent": "/asset/645HG-blade"
			}
			,
			{
				"uri": "/asset/coil",
				"partname": "coil",
				"parent": "/asset/HY3-motor"
			}
			,
			{
				"uri": "/asset/HY3-motor",
				"partname": "HY3-motor",
				"parent": "/asset/54JK41-fan",
				"partno": "953",
				"unitcost": "103.88",
				"serviceable": "true"
			}
			,
			{
				"uri": "/asset/in-wires",
				"partname": "in-wires",
				"parent": "/asset/primary-wires"
			}
			,
			{
				"uri": "/asset/LSJ-wires",
				"partname": "LSJ-wires",
				"parent": "/asset/54JK41-fan",
				"partno": "651",
				"unitcost": "56.25",
				"serviceable": "false"
			}
			,
			{
				"uri": "/asset/out-wires",
				"partname": "out-wires",
				"parent": "/asset/primary-wires"
			}
			,
			{
				"uri": "/asset/primary-wires",
				"partname": "primary-wires",
				"parent": "/asset/LSJ-wires"
			}
			,
			{
				"uri": "/asset/secondary-wires",
				"partname": "secondary-wires",
				"parent": "/asset/LSJ-wires"
			}
			,
			{
				"uri": "/asset/slider",
				"partname": "slider",
				"parent": "/asset/HY3-motor"
			}
			,
			{
				"uri": "/asset/third-wires",
				"partname": "third-wires",
				"parent": "/asset/LSJ-wires"
			}
		] ;
		$scope.orderData=[
			{
				"uri": "/SAMOrder/54JK41-fan",
				"partname": "54JK41-fan",
				"parent": "/SAMOrder/ON0001",
				"partno": "564",
				"qty": "1",
				"totalweight": "34.12",
				"totalcost": "23.88"
			}
			,
			{
				"uri": "/SAMOrder/645HG-blade",
				"partname": "645HG-blade",
				"parent": "/SAMOrder/ON0001",
				"partno": "225",
				"qty": "17",
				"totalweight": "60.00",
				"totalcost": "0"
			}
			,
			{
				"uri": "/SAMOrder/blade-1",
				"partname": "blade-1",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/blade-2",
				"partname": "blade-2",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/blade-3",
				"partname": "blade-3",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/coil",
				"partname": "coil",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/HY3-motor",
				"partname": "HY3-motor",
				"parent": "/SAMOrder/ON0001",
				"partno": "953",
				"qty": "1",
				"totalweight": "78.24",
				"totalcost": "23.88"
			}
			,
			{
				"uri": "/SAMOrder/in-wires",
				"partname": "in-wires",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/LSJ-wires",
				"partname": "LSJ-wires",
				"parent": "/SAMOrder/ON0001",
				"partno": "651",
				"qty": "8",
				"totalweight": "10.37",
				"totalcost": "0"
			}
			,
			{
				"uri": "/SAMOrder/out-wires",
				"partname": "out-wires",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/primary-wires",
				"partname": "primary-wires",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/secondary-wires",
				"partname": "secondary-wires",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/slider",
				"partname": "slider",
				"parent": "/SAMOrder/ON0001"
			}
			,
			{
				"uri": "/SAMOrder/third-wires",
				"partname": "third-wires",
				"parent": "/SAMOrder/ON0001"
			}
		] ;
		$scope.BOMdet=[
			{
				"uri":"/SAMOrder/ON0001",
				"partname":"jetEngine103456"
			}
			,
			{
				"uri":"/SAMOrder/54JK41-fan",
				"partname":"54JK41-fan",
				"parent":"/SAMOrder/ON0001",
				"partno":"564",
				"qty":"1",
				"totalweight":"34.12",
				"totalcost":"23.88"
			}
			,
			{
				"uri":"/SAMOrder/645HG-blade",
				"partname":"645HG-blade",
				"parent":"/SAMOrder/ON0001",
				"partno":"225",
				"qty":"17",
				"totalweight":"60.00",
				"totalcost":"0"
			}
			,
			{
				"uri":"/SAMOrder/HY3-motor",
				"partname":"HY3-motor",
				"parent":"/SAMOrder/54JK41-fan",
				"partno":"953",
				"qty":"1",
				"totalweight":"78.24",
				"totalcost":"23.88"
			}
			,
			{
				"uri":"/SAMOrder/LSJ-wires",
				"partname":"LSJ-wires",
				"parent":"/SAMOrder/ON0001",
				"partno":"651",
				"qty":"8",
				"totalweight":"10.37",
				"totalcost":"0"
			}
			,
			{
				"uri":"/SAMOrder/blade-1",
				"partname":"blade-1",
				"parent":"/SAMOrder/ON0001",
			}
			,
			{
				"uri":"/SAMOrder/blade-2",
				"partname":"blade-2",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/blade-3",
				"partname":"blade-3",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/coil",
				"partname":"coil",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/slider",
				"partname":"slider",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/primary-wires",
				"partname":"primary-wires",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/secondary-wires",
				"partname":"secondary-wires",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/third-wires",
				"partname":"third-wires",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/in-wires",
				"partname":"in-wires",
				"parent":"/SAMOrder/ON0001"
			}
			,
			{
				"uri":"/SAMOrder/out-wires",
				"partname":"out-wires",
				"parent":"/SAMOrder/ON0001"
			}
		];
		$scope.BOMdetails= [
			[{
				"SrNo":"1","Description":"ABSDF Fan Motor","PartNo":1234,"Qty":"5","Weight":"34.12","UnitCost":"23.88","TotalCost":"33.22","All":"1"}
			 ,
			 {
				 "SrNo":"1.2","Description":"ABSDF Fan Motor 1","PartNo":1284,"Qty":"2","Weight":"24.12","UnitCost":"55.88","TotalCost":"45.22","All":"1"}
			 ,
			 {
				 "SrNo":"1.3","Description":"ABSDF Fan Wire","PartNo":1884,"Qty":"8","Weight":"10.12","UnitCost":"15.88","TotalCost":"15.22","All":"1"}
			 ,
			 {
				 "SrNo":"1.4","Description":"ABSDF Fan Wire","PartNo":1984,"Qty":"3","Weight":"10.12","UnitCost":"15.88","TotalCost":"15.22","All":"1"}
			 ,
			 {
				 "SrNo":"1.5","Description":"ABSDF Fan Blades","PartNo":8984,"Qty":"3","Weight":"27.12","UnitCost":"75.08","TotalCost":"75.22","All":"1"}
			 ,
			 {
				 "SrNo":"1.6","Description":"ABSDF Fan Blades","PartNo":8904,"Qty":"6","Weight":"27.12","UnitCost":"75.08","TotalCost":"75.22","All":"1"}
			],
			[{
				"SrNo":"2","Description":"JH0 Fan Motor","PartNo":1234,"Qty":"5","Weight":"34.1","UnitCost":"23.8","TotalCost":"33.22","All":"1"}
			 ,
			 {
				 "SrNo":"2.1","Description":"JHSDF Fan Motor 1","PartNo":1284,"Qty":"2","Weight":"24.2","UnitCost":"55.8","TotalCost":"45.22","All":"1"}
			 ,
			 {
				 "SrNo":"2.2","Description":"JHSDF Fan Motor 1","PartNo":1284,"Qty":"2","Weight":"24.12","UnitCost":"55.88","TotalCost":"45.22","All":"1"}
			 ,
			 {
				 "SrNo":"2.3","Description":"JHSDF Fan Wire","PartNo":1884,"Qty":"8","Weight":"10.12","UnitCost":"15.88","TotalCost":"15.22","All":"1"}
			 ,
			 {
				 "SrNo":"2.4","Description":"JHSDF Fan Wire","PartNo":1984,"Qty":"3","Weight":"10.12","UnitCost":"15.88","TotalCost":"15.22","All":"1"}
			]
		];
		$scope.tempArr=[];
		
		//function for Asset and Order Data start
		$scope.left=421;
		$scope.top=122;
		$scope.hotSpotArray=[];
		$scope.OrderId=$rootScope.orderNumber;
		$scope.engineName="jetEngine103456";
		$scope.getAllHotSpot = function(SamOrder){
			SamService.getAssetUri(SamOrder)
			.then(function(responseOrder){
				console.log(responseOrder.data[0]);
				$scope.OrderDetails=responseOrder.data[0].orders;
				SamService.getChildDataAsset(responseOrder.data[0].assetUri)
				.then(function(responseAsset){
					$scope.hotSpotArray=responseAsset.data;
				}
					  ,function(error){
						  console.log("failure");
					  }
					 );
				SamService.getAssetParent(responseOrder.data[0].assetUri).then(function(assetResponse){
					$scope.images=assetResponse.data[0].images;
					$scope.blobURL=assetResponse.data[0].blobURL;
					$scope.modelImage = $scope.blobURL+$scope.images.img_front;
				}
																			   ,function(errror){
																			   }
																			  );
			}
				  ,function(e){
					  console.log(e)}
				 );
		};
//Variable selection on carousal ..abhi
 var strng;
$scope.bringtoDefault = function()
{$(".big-ghost").remove();
		
var initialW=0;
		//console.log("initialW"+initialW);
		var initialH=0;
		//console.log("initialH)"+initialH);
		var abcd=0;
		var pqrs=0;
		var maxX = 0;
			var minX = 5000;
			var maxY = 0;
			var minY = 5000;
var totalElements = 0;
$scope.mainPart=0;
$scope.subPart=0;
};

		$scope.getAllHotSpot($scope.OrderId,strng);
		$scope.setImagePath = function(img,strng){
			$scope.modelImage = $scope.blobURL+img;
		//alert(strng);

		if(strng=="front"){
		$scope.bringtoDefault();
		$(".big-ghost").remove();
		
		$("#front").addClass("grid");
		$("#front-ghost").addClass("ghost-select");
		
		$("#back").removeClass("grid");
		$("#back-ghost").removeClass("ghost-select");

		$("#top").removeClass("grid");
		$("#top-ghost").removeClass("ghost-select");

		$("#bottom").removeClass("grid");
		$("#bottom-ghost").removeClass("ghost-select");
		$scope.selectionfunc();


		}
		if(strng=="back"){
		$scope.bringtoDefault();
		$("#front").removeClass("grid");
		$("#front-ghost").removeClass("ghost-select");
		
		$("#back").addClass("grid");
		$("#back-ghost").addClass("ghost-select");

		$("#top").removeClass("grid");
		$("#top-ghost").removeClass("ghost-select");

		$("#bottom").removeClass("grid");
		$("#bottom-ghost").removeClass("ghost-select");
		$scope.selectionfunc();

		}
		if(strng=="top"){
		$scope.bringtoDefault();
		$(".big-ghost").remove();
		$("#front").removeClass("grid");
		$("#front-ghost").removeClass("ghost-select");
		
		$("#back").removeClass("grid");
		$("#back-ghost").removeClass("ghost-select");

		$("#top").addClass("grid");
		$("#top-ghost").addClass("ghost-select");

		$("#bottom").removeClass("grid");
		$("#bottom-ghost").removeClass("ghost-select");
		$scope.selectionfunc();

		}
		if(strng=="bottom"){
		$scope.bringtoDefault();
		$(".big-ghost").remove();
		$("#front").removeClass("grid");
		$("#front-ghost").removeClass("ghost-select");
		
		$("#back").removeClass("grid");
		$("#back-ghost").removeClass("ghost-select");

		$("#top").removeClass("grid");
		$("#top-ghost").removeClass("ghost-select");

		$("#bottom").addClass("grid");
		$("#bottom-ghost").addClass("ghost-select");
		$scope.selectionfunc();

		}





		};

//end
		$scope.getSrNo = function(a){
			if(a%1.0==0){
				return $scope.finalNumArray.indexOf(a)+1.0;
			}
			else{
				return ((a*10)%10)/10+$scope.finalNumArray.indexOf(Math.ceil(a)-1)+1.0;
			}
		};
		$scope.BOMDetail=[];
		//BOM Edit start...
		$scope.getBOMdetails = function(item){
			console.log("item:"+item);
		};
		$scope.getBOMdetails1 = function(item){
			$scope.BOMDetail=$scope.BOMdetails[item];
		};
		$scope.dummyFunction = function(){
			alert("inside dummyFunction");
		};
		$scope.data="";
		$scope.selectedCounter = 0;
		$scope.selectedRow = null;
		// initialize our variable to null
		$rootScope.selectedData=[];
		$scope.setClickedRow = function(index,x){
			//function that sets the value of selectedRow to current index
			$scope.selectedDataIndex=index;
			//$rootScope.selectedData=x;
			if (document.getElementById("checking-"+index).checked) {
				$scope.selectedCounter ++;
				$rootScope.selectedData.push(x);
				console.log("x data:"+JSON.stringify(x));
				document.getElementById("row-"+index).className="highlight-row";
				return true;
			}
			else {
				$rootScope.selectedData.splice($rootScope.selectedData.indexOf(x), 1);
				$scope.selectedCounter --;
				document.getElementById("row-"+index).className="";
				return false;
			}
		};
		$scope.show = false;
		$scope.addRow = function() {
			$scope.editMode1 = true;
			$scope.show = true;
			//$scope.new = {};
		};
		$scope.editing=false;
		$scope.newField={
		};
		
		$scope.cancel = function(index) {
			if ($scope.editing !== false) {
				$scope.BOMdetails[$scope.editing] = $scope.newField;
				$scope.editing = false;
			}
		};
		$scope.cancelAdd = function(index) {
			$scope.show = false;
		};
		//BOM Edit end...
		/*************             add to cart start                        ****************/
$scope.selectedItems = function()
{
    $scope.cartData=[];
    $scope.tempCount=0;
    if($rootScope.selectedData.length<1)
    {
	document.getElementById("addToCartAlertId1").style.display='block';
	$timeout(function () { document.getElementById("addToCartAlertId1").style.display='none'; }, 1000);
    }
    else
    {
    angular.copy($rootScope.selectedData,$scope.cartData);
 
    angular.forEach($scope.cartData, function(value){
    angular.forEach($scope.alreadyInCart, function(value1){
    if(value.partname == value1.partname)
$scope.tempCount++;
    });
    value.uri = "/Cart/"+$scope.OrderId.split("/")[2]+value.uri.split("/")[2];
    delete value["parent"];
    delete value["SrNo"];
    delete value["checked"];
    value.parentOrder = "/Cart/"+$scope.OrderId.split("/")[2];
    });
    $rootScope.cartCounter = $rootScope.cartCounter + ($scope.cartData.length - $scope.tempCount);
    $scope.cartUri = "/Cart/"+$scope.OrderId.split("/")[2];
    $scope.cartData.push({"uri":$scope.cartUri});
    SamService.addToCartService($scope.cartData).then(function(cartAddedResponse){
    console.log(cartAddedResponse);
	document.getElementById("addToCartAlertId").style.display='block';
	$timeout(function () { document.getElementById("addToCartAlertId").style.display='none'; }, 1000);
    },function(errror){console.log(errror);});
}
};
 
 
 
/**********                add to cart end                                         *************/ 
 
$scope.getAssetName=function(uri){
    $scope.AssetName=uri.split("/");
    return $scope.AssetName[2];
};
$scope.exportToXls = function(type){
	if($rootScope.selectedData.length>0){
		alasql('SELECT * INTO '+type.toUpperCase()+'("'+$scope.OrderId.split("/")[2]+'.'+type+'",{headers:true}) FROM ?',[$rootScope.selectedData]);
	}
	else{
		document.getElementById("exportAlertId").style.display='block';
		$timeout(function () { document.getElementById("exportAlertId").style.display='none'; }, 1000);
	}
};


//My selection new code
$scope.selectionfunc=function(){
		/**********                add to cart end         
                                *************/ 
		//*************************************** SELECTION START ************************************************************
			
		//Selection
		var initialW=0;
		//console.log("initialW"+initialW);
		var initialH=0;
		//console.log("initialH)"+initialH);
		var abcd=0;
		var pqrs=0;
		//$(document).ready(function(){ 
		$(".grid").mousedown(function (e) {
			console.log("e:",e);
			//alert("inside selection");
			$(".big-ghost").remove();
			$(".ghost-select").addClass("ghost-active");
			//var abcd=e.pageX-546;
			//var pqrs=e.pageY-105;
			var offset = $(this).offset();
			if(e.pageX >= offset.left){
				abcd = e.pageX - offset.left,
					pqrs = e.pageY - offset.top;
			}
			if(e.pageX < offset.left){
				abcd = offset.left - e.pageX,
					pqrs = offset.top - e.pageY;
			}
			console.log("abcd"+abcd);
			console.log("pqrs"+pqrs);
			$(".ghost-select").css("left", abcd);
			$(".ghost-select").css("top", pqrs);
			var abc="rgba(239, 28, 190, 0.6)";
			$(".ghost-select").css("background-color", abc);
			initialW = e.pageX;
			//console.log("e.pageX"+e.pageX);
			initialH = e.pageY;
			//console.log("e.pageY"+e.pageY);
			$(document).bind("mouseup", selectElements);
			$(document).bind("mousemove", openSelector);
			//$(".ghost-select").remove();
			//document.getElementById("#big-ghost").style.visibility = "hidden";
		}
							);
		
		function selectElements(e) {
			//alert("inside selection");
			$scope.BOMDetail1=[];
			$scope.BOMDetail=[];
			//$scope.loadingRow=false;
			$(".score>span").text('0');
			$(document).unbind("mousemove", openSelector);
			$(document).unbind("mouseup", selectElements);
			var maxX = 0;
			var minX = 5000;
			var maxY = 0;
			var minY = 5000;
			var totalElements = 0;
			var elementArr = new Array();
			$scope.mainPart=0;
			$scope.subPart=0;
			$(".elements").each(function () {
				var aElem = $(".ghost-select");
				var bElem = $(this);
				var result = doObjectsCollide(aElem, bElem);
				//console.log(result);
				if (result == true) {
					$scope.loadingRow=false;
					console.log(bElem.context.id);
					$scope.hotspotId= bElem.context.id;
					
					angular.forEach($scope.hotSpotArray,function(value,key){
						if(value.partname==$scope.hotspotId){
							value.SrNo=key+1;
							SamService.getChildDataAsset(value.uri)
							.then(function(r){
								angular.forEach(r.data, function(value1,index){
									value1.SrNo=(key+1.0)+((index+1.0)/10);
									angular.forEach($scope.OrderDetails, function(value2, index2){
										if(value2.partname==value1.partname){
											value1.qty=value2.qty;
											value1.Weight=value2.totalweight;
											value1.TotalCost=value2.totalcost;
										}
									}
												   );
									$scope.BOMDetail.push(value1);
								}
											   );
								$scope.loadingRow=true;
							}
								  ,function(e){
								  }
								 );
							angular.forEach($scope.OrderDetails, function(value2, index2){
								if(value2.partname==value.partname){
									value.qty=value2.qty;
									value.Weight=value2.totalweight;
									value.TotalCost=value2.totalcost;
								}
							}
										   );
							$scope.BOMDetail.push(value);
							$scope.BOMDetail = $filter('orderBy')($scope.BOMDetail, 'SrNo', false);
							$scope.finalNumArray=[];
							angular.forEach($scope.BOMDetail, function(value, index){
								if(value.SrNo%1==0){
									$scope.finalNumArray.push(value.SrNo);
								}
							}
										   );
						}
							
					}
								   );
					$scope.$digest();
					$(".score>span").text( Number($(".score>span").text())+1 );
					var aElemPos = bElem.offset();
					var bElemPos = bElem.offset();
					var aW = bElem.width();
					var aH = bElem.height();
					var bW = bElem.width();
					var bH = bElem.height();
					var coords = checkMaxMinPos(aElemPos, bElemPos, aW, aH, bW, bH, maxX, minX, maxY, minY);
					maxX = coords.maxX;
					minX = coords.minX;
					maxY = coords.maxY;
					minY = coords.minY;
					var parent = bElem.parent();
					//console.log(aElem, bElem,maxX, minX, maxY,minY);
					if (bElem.css("left") === "auto" && bElem.css("top") === "auto") {
						bElem.css({
							'left': parent.css('left'),
							'top': parent.css('top')
						}
								 );
					}
					$("body").append("<div  class='big-ghost' x='" + Number(minX - 20) + "' y='" + Number(minY - 10) + "'></div>");
					$(".big-ghost").css({
						'width': maxX + 40 - minX,
						'height': maxY + 20 - minY,
						'top': minY - 10,
						'left': minX - 20
					}
									   )
				};
				console.log("inside each");
			}
							   );
			$(".ghost-select").removeClass("ghost-active");
			$(".ghost-select").width(0).height(0);
			$scope.$digest();
			////////////////////////////////////////////////
		}
		function openSelector(e) {
			var w = Math.abs(initialW - e.pageX);
			var h = Math.abs(initialH - e.pageY);
			$(".ghost-select").css({
				'width': w,
				'height': h
			}
								  );
			if (abcd <= initialW && pqrs >= initialH) {
				$(".ghost-select").css({
					'left': abcd
				}
									  );
			}
			else if (pqrs <= initialH && abcd >= initialW) {
				$(".ghost-select").css({
					'top': pqrs
				}
									  );
			}
			else if (e.pageY < initialH && e.pageX < initialW) {
				$(".ghost-select").css({
					'left': abcd,
					"top": pqrs
				}
									  );
			}
		}
		function doObjectsCollide(a, b) {
			// a and b are your objects
			//console.log(a.offset().top,a.position().top, b.position().top, a.width(),a.height(), b.width(),b.height());
			var aTop = a.offset().top;
			var aLeft = a.offset().left;
			var bTop = b.offset().top;
			var bLeft = b.offset().left;
			return !(
				((aTop + a.height()) < (bTop)) ||
				(aTop > (bTop + b.height())) ||
				((aLeft + a.width()) < bLeft) ||
				(aLeft > (bLeft + b.width()))
			);
		}
		function checkMaxMinPos(a, b, aW, aH, bW, bH, maxX, minX, maxY, minY) {
			'use strict';
			if (a.left < b.left) {
				if (a.left < minX) {
					minX = a.left;
				}
			}
			else {
				if (b.left < minX) {
					minX = b.left;
				}
			}
			if (a.left + aW > b.left + bW) {
				if (a.left > maxX) {
					maxX = a.left + aW;
				}
			}
			else {
				if (b.left + bW > maxX) {
					maxX = b.left + bW;
				}
			}
			////////////////////////////////
			if (a.top < b.top) {
				if (a.top < minY) {
					minY = a.top;
				}
			}
			else {
				if (b.top < minY) {
					minY = b.top;
				}
			}
			if (a.top + aH > b.top + bH) {
				if (a.top > maxY) {
					maxY = a.top + aH;
				}
			}
			else {
				if (b.top + bH > maxY) {
					maxY = b.top + bH;
				}
			}
			return {
				'maxX': maxX,
				'minX': minX,
				'maxY': maxY,
				'minY': minY
			};
		}}//end
$scope.selectionfunc();
		//*************************************** SELECTION END **************************************************************
	}
]);//End Of Controller
});

