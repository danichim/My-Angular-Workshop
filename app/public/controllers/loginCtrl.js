(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);


    function loginCtrl($scope, $localStorage, $location, Auth) {
        var vm = this;

        vm.test = 'muci';

        function successAuth(res){
            $localStorage.token = res.token;
            $location.path('/user');
        }

        function errorAuth(err){
            console.log(err);
            $scope.error = 'Auth failed';
        }

        vm.signin = function(email, password){
            var formData = {
                email: email,
                password: password
            };
            Auth.signin(formData, successAuth, errorAuth);
        };

        return $scope.LoginCtrl = vm;

    }

    loginCtrl.$inject = [
        '$scope',
        '$localStorage',
        '$location',
        'Auth'
    ];

})();