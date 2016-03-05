(function () {
    'use strict';

    angular
        .module('app')
        .controller('registerCtrl', registerCtrl);


    function registerCtrl($scope, $localStorage, $location, Auth) {
        var vm = this;

        vm.teste = 'muci register';

        function successRegister(res){
            console.log(res, 'ressss')
            $localStorage.token = res.token;
        }

        function errorRegister(err){
            console.log(err);
            $scope.error = 'Auth failed';
        }

        vm.registerUser = function(email, password, isAdmin){
            var formData = {
                email: email,
                password: password,
                isAdmin: isAdmin
            };
            Auth.register(formData, successRegister, errorRegister);
        };

        return $scope.RegisterCtrl = vm;

    }

    registerCtrl.$inject = [
        '$scope',
        '$localStorage',
        '$location',
        'Auth'
    ];

})();