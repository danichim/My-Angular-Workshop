(function () {
    'use strict';

    angular
        .module('app')
        .controller('userCtrl', userCtrl);


    function userCtrl($scope, Fortune) {
        var vm = this;

        vm.test = 'muci user';
        //vm.login = login;

        vm.randomFortune = '';
        var fortune = new Fortune();
        fortune.getFortune().$promise.then(function(){
            vm.randomFortune = fortune.text;
        });

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