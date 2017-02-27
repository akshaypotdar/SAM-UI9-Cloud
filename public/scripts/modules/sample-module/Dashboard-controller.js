define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('DashboardController', ['$scope','$state','$http','$stateParams','$rootScope','SamService', function ($scope,$state,$http,$stateParams,$rootScope,SamService) {

$rootScope.orderNumber='/SAM/ON0001';
$scope.demoVar="sampleData";
$rootScope.loadingVar=false;

 


var activeFilters = [];
$scope.accessToken="";
function timeout(){
    var t = setTimeout(function(){
        //alert("Inside pagin");
$scope.userList = new List('search-results', {
  valueNames: ['status','name','id','client','priority','date'],
  page: 3,
  plugins: [ ListPagination({}) ]
  });
        //willtakesometime();
    },5000);
}
 
//var deferred = $q.defer();

	SamService.getAllTickets().then(function(response){
			 
			$scope.EngineDetails=response.data;
			$scope.engineId=$scope.EngineDetails[0];
			$scope.tempuri = $scope.engineId.uri;
			$scope.OrderId = $scope.tempuri.split("/")[2];
			SamService.getCartItems($scope.OrderId).then(function(cartAddedResponse){
			$rootScope.cartCounter=cartAddedResponse.data.length;
			},function(errror){console.log(errror);});
			timeout();
			SamService.getAssetParent(response.data[0].assetUri).then(function(assetResponse){
				$scope.images=assetResponse.data[0].images;
				$scope.blobURL=assetResponse.data[0].blobURL;
				},function(errror){});

var fileArray=[];
var fileArray=$scope.engineId.attach;
console.dir("fileArray"+fileArray);
/*fileArray[0]='engine4.jpeg';
fileArray[1]='engine.jpg';
fileArray[2]='engine5.jpg';
fileArray[3]='engine6.jpeg';
fileArray[4]='icon_pdf.png';*/
$scope.attachments = false; 
var galleryId = "gallery";
var thumb="";
var gallery = document.getElementById(galleryId);
for(var i = 0; i<fileArray.length; i++){
	thumb = document.createElement("div");
	var thumbL = document.createElement("label");
	thumb.classList.add('thumbnail'); // Add the class thumbnail to the created div
	thumbL.classList.add('thumbnailLabel');
	var res = fileArray[i].split(".");
	console.log(res[1]);
	if(res[1]=='pdf')
	{
		var img = document.createElement("img");
		var src1 = $scope.engineId.blobURL+fileArray[i];
		console.log($scope.engineId.blobURL+""+fileArray[i]);
		thumb.appendChild(img);
		thumb.appendChild(thumbL);
		thumb.appendChild(img);
		thumb.appendChild(thumbL);
		gallery.appendChild(thumb);
		img.src ='views/icon_pdf.png';
		thumbL.innerHTML = fileArray[i];
			var modal1 = document.getElementById('myModal1');
			var modalPDF = document.getElementById("thumbPdf1");
			//var captionText = document.getElementById("caption1");
			img.onclick = function(){
			    modal1.style.display = "block";
			    //modalPDF.src = 'views/pdfFile.pdf'; 
			   // modalPDF.src = 'http:///www.orimi.com/pdf-test.pdf';
			     modalPDF.src = src1;
			}
	
	}
	else
	{
		var img = document.createElement("img");

		thumb.appendChild(img);
		thumb.appendChild(thumbL);
		thumb.appendChild(img);
		thumb.appendChild(thumbL);
		gallery.appendChild(thumb);
		img.src =$scope.engineId.blobURL+fileArray[i] ;
		thumbL.innerHTML = fileArray[i];

		// Get the modal
		var modal2 = document.getElementById('myModal');
		var modalImg = document.getElementById("img01");
		var captionText = document.getElementById("caption2");
		img.onclick = function(){
		    modal2.style.display = "block";
		    modalImg.src = this.src;
		    captionText.innerHTML = this.alt;
		}
		var span = document.getElementsByClassName("close2")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() { 
		    modal2.style.display = "none";
		}

	}
	if(i==fileArray.length-1)
	$scope.attachments = true; 
}
		var span1 = document.getElementsByClassName("close1")[0];

		// When the user clicks on <span> (x), close the modal
		span1.onclick = function() { 
		    modal1.style.display = "none";
		}  

			}, function(error){});

/*
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
			$scope.accessToken=response.data.access_token;
				
                	var req = {
                	method: 'GET',
			url: 'https://predix-asset.run.aws-usw02-pr.ice.predix.io/SAM',
                	headers: {
			'Authorization' : 'Bearer '+$scope.accessToken,
                    	'Content-Type': 'application/json',
			'Predix-Zone-Id' : '3c7bc6dd-8f09-45e5-be7f-667a90292329'
                	 	 }
            		 };

            	$http(req)
            	.then(function(response){
			$scope.EngineDetails=response.data;
			$scope.engineId=$scope.EngineDetails[0];
			console.log(JSON.stringify("EngineDetails"+$scope.EngineDetails[0].note));
			console.log("notes..........."+JSON.stringify($scope.engineId.note));
			// ng-repeat="notes in engineId.note track by $index"
			console.log("note-name..."+JSON.stringify($scope.engineId.note[1].notename));
			timeout();
            	}, function(error){
			console.log("error");
                	//deferred.reject('Error fetching Options' + error);
            	});
            	}, function(error){
			console.log("error");
                	//deferred.reject('Error fetching Options' + error);
            	});
*/

            	//console.log(deferred.promise);
/*
$http.get(req).then(
	function(response) {
	$scope.EngineDetails = response;
	console.log("Json from asset model:- "+JSON.stringify($scope.EngineDetails));
	timeout();
}); */

$scope.engineDefect=function(EngineDetails)
{ $rootScope.orderNumber=EngineDetails.uri;
	$scope.engineId=EngineDetails;
	$scope.tempuri = EngineDetails.uri;
	$scope.OrderId = $scope.tempuri.split("/")[2];
	SamService.getCartItems($scope.OrderId).then(function(cartAddedResponse){
	$rootScope.cartCounter=cartAddedResponse.data.length;
	},function(errror){console.log(errror);});
};

$scope.functionNav = function(){
	$rootScope.loadingVar=true;
	$state.go('BOMcreation');
	/*$state.transitionTo($state.current, $stateParams, { 
 		 reload: true, inherit: true, notify: true
});*/
//$state.go('BOMcreation', {}, { reload: true });
};
$scope.openServiceHistory = function(){
	$state.go('ServiceHistory'); 
};
//Notes History Functions
$scope.addNote = function(){
	$scope.newNote={}
	$scope.newNote.notename=$scope.noteName;
	$scope.newNote.descrpt=$scope.noteDescription;
	$scope.engineId.note.push($scope.newNote);
	SamService.putNote($scope.engineId)
	.then(function(r){console.log(r);},function(e){console.log(e);});
};
$scope.deleteNote = function(index){
	$scope.engineId.note.splice(index, 1);
	SamService.putNote($scope.engineId)
	.then(function(r){console.log(r);},function(e){console.log(e);});
};
$scope.setNoteToDelete = function(index){
	$scope.noteToDelete = index;
}; 



//sort
$scope.sortList=function(){
    $scope.userList.on("updated1", function () {
        $('.sort').each(function () {
            if ($(this).hasClass("asc")) {
              $(this).find(".fa").addClass("fa-sort-asc").removeClass("fa-sort-desc").show();
            } else if ($(this).hasClass("desc")) {
         $(this).find(".fa").addClass("fa-sort-desc").removeClass("fa-sort-asc").show();
            } else {
              
                $(this).find(".fa").hide();
            }
        })
    })
};

    
//filter for priority old

    $('.filter').change(function() {
        var bool = this.checked;
        var value = $(this).data("value");
	
        $scope.userList.filter(function (item) {
		
            if (item.values().priority == value && bool == true) {
                return true;
            } else if ($scope.userList.filtered && bool == false) {
                return true;
            }
		 else {
                return false;
            }
        });

        return false;

     });

//filter for status
 $('.filter1').change(function() {
        var bool = this.checked;
        var value = $(this).data("value"); 
	//alert("v"+value);
        $scope.userList.filter(function (item) {
	//alert("values"+item.values().status);	
            if (item.values().status == value && bool == true) {
                return true;
            } else if ($scope.userList.filtered && bool == false) {
                return true;
            }
		 else {
                return false;
            }
        });

        return false;

     });


/*filter for status new 
    $('.filter').change(function() {
        var isChecked = this.checked;
        var value = $(this).data("value");
      
		if(isChecked){
			//  add to list of active filters
			activeFilters.push(value);console.log("activeFilters.."+activeFilters);
		}
		else
		{
			// remove from active filters
			activeFilters.splice(activeFilters.indexOf(value), 1);
		}
		$scope.userList.filter(function (item) {
			if(activeFilters.length > 0)
			{
				//return(activeFilters.indexOf(item.values().status),activeFilters.indexOf(item.values().priority ) ) > -1;
				var op =(activeFilters.indexOf(item.values().status))>-1;
				console.log("op="+op); 
				var op1= (activeFilters.indexOf(item.values().priority))>-1;
				console.log("op1="+op1); 
				//return activeFilters.indexOf(item.values().status),activeFilters.indexOf(item.values().priority);
				//console.log("item.values().status ...."+item.values().status);
				//return(activeFilters.indexOf(item.values().status) ) > -1; 
				//alert(op);
				//return op; 
			}
			return true;
		});
     });*/





 }]); //End Of Controller
});
