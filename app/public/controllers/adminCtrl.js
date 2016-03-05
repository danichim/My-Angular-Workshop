(function () {
    'use strict';

    angular
        .module('app')
        .controller('adminCtrl', adminCtrl);


    function adminCtrl($scope) {
        var vm = this;

        vm.test = 'muci';
        //vm.login = login;

        return $scope.AdminCtrl = vm;

    }

    adminCtrl.$inject = [
        '$scope'
        //'$localStorage',
        //'$location',
        //'Auth'
    ];

})();