'use strict';

angular.module('myApp', [
    'ngRoute','ajoslin.mobile-navigate'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/homepage.html', controller: 'HomeCtrl'});
     $routeProvider.otherwise({redirectTo: '/home'});
}]);


angular.bootstrap(document, ['myApp']);
