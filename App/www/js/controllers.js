angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
})

.controller('BusCtrl',function($scope){
  
})

.controller('ContactCtrl',function($scope){

})

.controller('MapCtrl', function($scope, $ionicLoading){
  	var myLatlng = new google.maps.LatLng(41.062812, -80.042031);
 
	var mapOptions = {
	    center: myLatlng,
	    zoom: 16,
	    mapTypeId: google.maps.MapTypeId.SATELLITE  //Make .ROADMAP for just map view
	};

	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	navigator.geolocation.getCurrentPosition(function(pos) {
	    map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
	    var myLocation = new google.maps.Marker({
	        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
	        map: map,
	        title: "My Location"
	    });
	});

	$scope.map = map;
})

.controller('SafetyCtrl',function($scope){
	$scope.safetyItems = [
		{itemName: "Academic Performance Concern", itemState: "/app/APConcern"},
		{itemName: "Angry Person", itemState: "/app/AngryPerson"},
		{itemName: "Behaviors of Concern", itemState: "/app/ConcerningBehaviour"},
		{itemName: "Communication Tips", itemState: "/app/CommunicationTips"},
		{itemName: "Referral Sources/Consultants", itemState: "/app/safety"},
		{itemName: "De-Escalation Skills", itemState: "/app/safety"},
		{itemName: "Disruptive Student", itemState: "/app/safety"},
		{itemName: "Emotional Crisis", itemState: "/app/safety"},
		{itemName: "Helpful Comments", itemState: "/app/safety"},
		{itemName: "Financially Troubled", itemState: "/app/safety"},
		{itemName: "How to make a student conduct referral", itemState: "/app/ConductReferralHowTo"},
		{itemName: "Medical Emergency", itemState: "/app/safety"},
		{itemName: "Mental Health Emergency", itemState: "/app/safety"},
		{itemName: "Physical Signs of Concern", itemState: "/app/safety"},
		{itemName: "Sexual Harassment/Stalking/Rape/Assault", itemState: "/app/safety"},
		{itemName: "Student in Crisis", itemState: "/app/safety"},
		{itemName: "Substance Abuse", itemState: "/app/safety"},
		{itemName: "Suicidal Thoughts/Ideations", itemState: "/app/safety"},
		{itemName: "Threat Assessment Team", itemState: "/app/safety"},
		{itemName: "Who should be referred", itemState: "/app/safety"},
		{itemName: "Victim/Survivor Assistance", itemState: "/app/safety"},
		{itemName: "Violent Person", itemState: "/app/safety"},
		{itemName: "Websites", itemState: "/app/safety"},
		{itemName: "BIT Membership", itemState: "/app/BitMembership"}
	];
})
.controller('DiningCtrl',function($scope){

})

.controller('HomeCtrl', function($scope) {

});
