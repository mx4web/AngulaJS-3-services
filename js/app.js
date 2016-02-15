angular.module('userApp', ['ngRoute'])
    .config(['$routeProvider',  function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/userList.html',
                controller: 'userCtrl'
            })
            .when('/new', {
                templateUrl: 'partials/editUser.html',
                controller: 'newUserCtrl'
            })
            .when('/edit/:index', {
                templateUrl: 'partials/editUser.html',
                controller: 'editUserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
