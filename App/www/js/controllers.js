angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
})

.controller('BusCtrl',function($scope){
  
})

.controller('ContactCtrl',function($scope){

})

.controller('MapCtrl', function($scope){
  google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        $scope.map = map;
})
})

.controller('SafetyCtrl',function($scope){
	$scope.safetyItems = [
		{itemName: "Academic Performance Concern", itemState: "/app/APConcern"},
		{itemName: "Angry Person", itemState: "/app/safety"},
		{itemName: "Behaviors of Concern", itemState: "/app/safety"},
		{itemName: "Communication Tips", itemState: "/app/safety"},
		{itemName: "Referral Sources/Consultants", itemState: "/app/safety"}
	];
})
.controller('DiningCtrl',function($scope){

})

.controller('HomeCtrl', function($scope) {

});
