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

	//this gets current location but i think we want sru location
	/*navigator.geolocation.getCurrentPosition(function(pos) {
	    map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
	    var myLocation = new google.maps.Marker({
	        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
	        map: map,
	        title: "My Location"
	    });
	});*/

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
//Sunday:"9:00Am - 8:00Pm", Monday:"7:00Am - 8:00Pm", Tuesday:"7:00Am - 8:00Pm", Wednesday:"7:00Am - 8:00Pm", Thursday:"7:00Am - 8:00Pm", Friday:"7:00Am - 7:00Pm", Saturday:"9:00Am - 7:00Pm"
.controller('DiningCtrl',function($scope){
	$scope.onCampus = [
		{placeName: "Boozel", Sunday: "9:00am-8:00pm", Monday: "7:00am-8:00pm", Tuesday:"7:00am-8:00pm", Wednesday:"7:00am-8:00pm", Thursday:"7:00-8:00pm", Friday:"7:00am-7:00pm", Saturday:"9:00am-7:00pm" },
		{placeName: "Rocky's", Sunday: "7:00am-8:00pm", Monday: "7:00am-8:00pm", Tuesday:"7:00am-8:00pm", Wednesday:"7:00am-8:00pm", Thursday:"7:00-8:00pm", Friday:"7:00am-7:00pm", Saturday:"9:00am-7:00pm"},
		{placeName: "WeisenFluh", Sunday: "7:00am-8:00pm", Monday: "7:00am-8:00pm", Tuesday:"7:00am-8:00pm", Wednesday:"7:00am-8:00pm", Thursday:"7:00-8:00pm", Friday:"7:00am-7:00pm", Saturday:"9:00am-7:00pm"},
		{placeName: "Library", Sunday: "7:00am-8:00pm", Monday: "7:00am-8:00pm", Tuesday:"7:00am-8:00pm", Wednesday:"7:00am-8:00pm", Thursday:"7:00-8:00pm", Friday:"7:00am-7:00pm", Saturday:"9:00am-7:00pm"},
		{placeName: "Cart" , Sunday: "7:00am-8:00pm", Monday: "7:00am-8:00pm", Tuesday:"7:00am-8:00pm", Wednesday:"7:00am-8:00pm", Thursday:"7:00-8:00pm", Friday:"7:00am-7:00pm", Saturday:"9:00am-7:00pm"}
	];
	
	$scope.offCampus = [
		{placeName: "North Country Brewing", Hours: "N/A"},
		{placeName: "Ginger Hill", Hours: "N/A"},
		{placeName: "Camelot", Hours: "N/A"},
		{placeName: "Sheetz", Hours: "N/A"},
		{placeName: "McDonalds", Hours: "N/A"}
	];
})

.controller('HomeCtrl', function($scope) {

});
