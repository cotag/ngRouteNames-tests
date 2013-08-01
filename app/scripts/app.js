angular.module('TestApp', ['ngRouteNames'])
.config(['$routeNamesProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  
  $routeProvider
    .when('/', {
      templateUrl: 'views/view1.html',
      name: 'home'
    })
    .when('/view2', {
      templateUrl: 'views/view2.html',
      name: 'view2'
    })
    .when('/:user/view3', {
      templateUrl: 'views/view3.html',
      name: 'view3'
    })
    .when('/:user/view4', {
      templateUrl: 'views/view4.html',
      name: 'view4'
    })
    .otherwise({
      redirectTo: '/'
    });
}]).

controller('TestAppCtrl', ['$scope', '$route', '$http', function ($scope, $route, $http) {

}]);
