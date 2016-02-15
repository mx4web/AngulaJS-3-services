angular.module('userApp')
    .service("userService", function(){
    var users = [
        {id: 1, fName: 'Megan', lName: 'Pege', gender: 'Female', age: 25},
        {id: 2, fName: 'Kim', lName: 'Pim', gender: 'Male', age: 36},
        {id: 3, fName: 'Sal', lName: 'Smith', gender: 'Female', age: 30},
        {id: 4, fName: 'Jack', lName: 'Jones', gender: 'Male', age: 20},
        {id: 5, fName: 'Anna', lName: 'Doe', gender: 'Female', age: 18},
        {id: 6, fName: 'Peter', lName: 'Pan', gender: 'Male', age: 45},
        {id: 7, fName: 'Eric', lName: 'Kraft', gender: 'Male', age: 2}
    ];

    this.getUsers = function(){
        return users;
    }

    this.add = function(obj){
        users.push(obj);
    }

    this.delete = function(index){
        users.splice(index, 1);
    }

    this.edit = function(index, obj){
        users[index] = obj;
    }
})