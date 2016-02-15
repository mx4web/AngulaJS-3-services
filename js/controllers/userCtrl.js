angular.module('userApp')
    .controller('userCtrl', ['$scope','userService', function($scope, userService) {
        $scope.users = userService.getUsers();
        $scope.delete = function(index){
            userService.delete(index);
        }
    }]);