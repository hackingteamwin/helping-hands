angular.module('starter',['ionic','firebase','starter.controllers','ngCordova','ngSanitize']).run(function($ionicPlatform,$state,$ionicPopup,$http,$rootScope,$localStorage,$cordovaToast){$ionicPlatform.registerBackButtonAction(function(event){if($state.current.name=="app.dashboard"||$state.current.name=="login"){if($localStorage.appdatas){if($localStorage.backtestapp==undefined){$cordovaToast.show('Press back button again to exit from the app.','long','center').then(function(success){$localStorage.backtestapp=!0},function(error){})}
else{$localStorage.backtestapp=undefined;navigator.app.exitApp()}}
else{if($localStorage.backtestapp==undefined){$cordovaToast.show('Press back button again to exit from the app.','long','center').then(function(success){$localStorage.backtestapp=!0},function(error){})}
else{$localStorage.backtestapp=undefined;navigator.app.exitApp()}}}
else{navigator.app.backHistory()}},100);$ionicPlatform.ready(function(){if(window.cordova&&window.cordova.plugins.Keyboard){cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!1);cordova.plugins.Keyboard.disableScroll(!0)}
if(window.StatusBar){StatusBar.styleDefault()}})}).config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){$ionicConfigProvider.backButton.text('');var config={apiKey:"AIzaSyDMFVirASJpqOb2FAaH3GoW0Z6sWoWqmpA",authDomain:"helping-hands-admin.firebaseapp.com",databaseURL:"https://helping-hands-admin.firebaseio.com",projectId:"helping-hands-admin",storageBucket:"helping-hands-admin.appspot.com",messagingSenderId:"151686644134"};firebase.initializeApp(config);$stateProvider.state('app',{url:'/app',abstract:!0,templateUrl:'templates/menu.html',controller:'appCtrl'}).state('login',{url:'/login',templateUrl:'templates/login.html',controller:'loginCtrl'}).state('signup',{url:'/signup',templateUrl:'templates/signup.html',controller:'signupCtrl'}).state('getMobile',{url:'/getMobile',cache:!1,templateUrl:'templates/auth/getMobile.html',controller:'getMobileCtrl'}).state('app.dashboard',{url:'/dashboard',cache:!1,views:{'menuContent':{templateUrl:'templates/dashboard.html',controller:'dashboardCtrl'}}}).state('app.share',{url:'/share',cache:!1,views:{'menuContent':{templateUrl:'templates/share.html',controller:'shareCtrl'}}}).state('app.profile',{url:'/profile',cache:!1,views:{'menuContent':{templateUrl:'templates/profile.html',controller:'profileCtrl'}}}).state('app.chatwithadmin',{url:'/chatwithadmin',cache:!1,views:{'menuContent':{templateUrl:'templates/chatwithadmin.html',controller:'chatwithadminCtrl'}}}).state('app.chatwithgroup',{url:'/chatwithgroup',cache:!1,views:{'menuContent':{templateUrl:'templates/chatwithgroup.html',controller:'chatwithgroupCtrl'}}}).state('app.viewimprovement',{url:'/viewimprovement',cache:!1,views:{'menuContent':{templateUrl:'templates/viewimprovement.html',controller:'viewimprovementCtrl'}}}).state('app.addneeds',{url:'/addneeds/:id',cache:!1,views:{'menuContent':{templateUrl:'templates/addneeds.html',controller:'addneedsCtrl'}}}).state('app.myactivity',{url:'/myactivity',cache:!1,views:{'menuContent':{templateUrl:'templates/myactivity.html',controller:'dashboardCtrl'}}}).state('app.notification',{url:'/notification',cache:!1,views:{'menuContent':{templateUrl:'templates/notification.html',controller:'notificationCtrl'}}}).state('app.editmyactivity',{url:'/editmyactivity/:id',cache:!1,views:{'menuContent':{templateUrl:'templates/editmyactivity.html',controller:'editmyactivityCtrl'}}})
$urlRouterProvider.otherwise('/login')})