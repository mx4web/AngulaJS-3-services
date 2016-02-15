angular.module('userApp')
    .controller('editUserCtrl', ['$scope', '$location', '$routeParams','userService', function($scope, $location, $routeParams, userService) {
        $scope.users = userService.getUsers();
        $scope.user = $scope.users[$routeParams.index];
        $scope.save = function(){
            userService.edit($routeParams.index, $scope.user);
            $location.path('/');
        }
}]);
