(function () {
    'use strict';

    angular
        .module('app')
        .controller('userCtrl', userCtrl);


    function userCtrl($scope, Fortune) {
        var vm = this;

        vm.test = 'muci';
        //vm.login = login;

        vm.randomFortune = '';
        var fortune = new Fortune();
        console.log('ion', fortune)
        fortune.getFortune().$promise.then(function(){
            vm.randomFortune = fortune.text;
        });

        //function successAuth(res){
        //    $localStorage.token = res.token;
        //    $location.path('/tobedecided');
        //}
        //
        //function errorAuth(err){
        //    console.log(err);
        //    $scope.error = 'Auth failed';
        //}
        //
        //$scope.signin = function(){
        //    var formData = {
        //        email: $scope.email,
        //        password: $scope.password
        //    };
        //    Auth.signin(formData, successAuth, errorAuth);
        //};

        return $scope.UserCtrl = vm;

    }

    userCtrl.$inject = [
        '$scope',
        'Fortune'
        //'$localStorage',
        //'$location',
        //'Auth'
    ];

})();