angular.module('userApp')
    .controller('newUserCtrl', ['$scope', '$location', 'userService', function($scope, $location, userService){
        $scope.users = userService.getUsers();
        $scope.user = {id: '', fName: '', lName: '', gender: '', age: ''};
        $scope.save = function(){
            $scope.user.id = $scope.users[$scope.users.length -1].id + 1;
            userService.add($scope.user);
            $location.path('/');
        }
}]);
