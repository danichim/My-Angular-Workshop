(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);


    function loginCtrl($scope, $localStorage, $location, Auth, $rootScope) {
        var vm = this;

        vm.test = 'muci';
        checkCurrentUser();

        function successAuth(res){
            $localStorage.token = res.token;
            checkCurrentUser();
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

        function checkCurrentUser(){
            var currentUser = Auth.getTokenClaims();
            if (currentUser && currentUser._doc) {
                if (currentUser._doc.isAdmin === true) {
                    $location.path('/admin');
                } else {
                    $location.path('/user');
                }
            }
        }


        return $scope.LoginCtrl = vm;

    }

    loginCtrl.$inject = [
        '$scope',
        '$localStorage',
        '$location',
        'Auth'
    ];

})();