const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

// app configuration
myApp.config(function($routeProvider, $mdThemingProvider){
  //console.log('config loaded');
  // define our client side routes
  $routeProvider
  .when('/search', {
      templateUrl: '/views/search.html',
      controller: 'SwapiSearchController as vm'
  })

  .when('/favorites', {
      templateUrl: '/views/favorites.html',
      controller: 'SwapiFavoritesController as vm'
  })
  .otherwise(
      { redirectTo: '/search' }
  );
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('pink');
});