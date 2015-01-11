// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.dining', {
      url: "/dining",
      views: {
        'menuContent' :{
          templateUrl: "templates/dining.html",
          controller: 'DiningCtrl'
        }
      }
    })
    .state('app.contact', {
      url: "/contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/contact.html",
          controller: 'ContactCtrl'
        }
      }
    })
    .state('app.safety', {
      url: "/safety",
      views: {
        'menuContent' :{
          templateUrl: "templates/safety.html",
          controller: 'SafetyCtrl'
        }
      }
    })
    .state('app.bus', {
      url: "/bus",
      views: {
        'menuContent' :{
          templateUrl: "templates/bus.html",
          controller: 'BusCtrl'
        }
      }
    })
    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html",
          controller: 'MapCtrl'
        }
      }
    })
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })
	//ding sub-states
	.state('app.onCampusDining', {
      url: "/dining/onCampusDining",
      views: {
        'menuContent' :{
          templateUrl: "templates/dining/onCampus.html",
		  controller: 'DiningCtrl'
        }
      }
    })
	.state('app.offCampusDining', {
      url: "/dining/offCampusDining",
      views: {
        'menuContent' :{
          templateUrl: "templates/dining/offCampus.html",
		  controller: 'DiningCtrl'
        }
      }
    })
	// all safety sub-states
	
	.state('app.APConcern', {
      url: "/APConcern",
      views: {
        'menuContent' :{
          templateUrl: "templates/safety/APConcern.html",
        }
      }
    })
	.state('app.AngryPerson', {
      url: "/AngryPerson",
      views: {
        'menuContent' :{
          templateUrl: "templates/safety/AngryPerson.html",
        }
      }
    })
	.state('app.BitMembership', {
      url: "/BitMembership",
      views: {
        'menuContent' :{
          templateUrl: "templates/safety/BitMembership.html",
        }
      }
    })
	.state('app.CommunicationTips', {
      url: "/CommunicationTips",
      views: {
        'menuContent' :{
          templateUrl: "templates/safety/CommunicationTips.html",
        }
      }
    })
	.state('app.ConcerningBehaviour', {
      url: "/ConcerningBehaviour",
      views: {
        'menuContent' :{
          templateUrl: "templates/safety/ConcerningBehaviour.html",
        }
      }
    })
	.state('app.ConductReferralHowTo', {
      url: "/ConductReferralHowTo",
      views: {
        'menuContent' :{
          templateUrl: "templates/safety/ConductReferralHowTo.html",
        }
      }
	  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

