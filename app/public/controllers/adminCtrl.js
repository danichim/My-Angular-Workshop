(function () {
    'use strict';

    angular
        .module('app')
        .controller('adminCtrl', adminCtrl);


    function adminCtrl($scope, Reflection) {
        var vm = this;

        vm.test = 'muci admin';

        vm.randomReflection = '';
        var reflection = new Reflection();
        reflection.getReflection().$promise.then(function(){
            vm.randomReflection = reflection.text;
        });

        return $scope.AdminCtrl = vm;

    }

    adminCtrl.$inject = [
        '$scope',
        'Reflection'
        //'$localStorage',
        //'$location',
        //'Auth'
    ];

})();