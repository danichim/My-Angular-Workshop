(function () {
    'use strict';

    angular
        .module('app')
        .controller('adminCtrl', adminCtrl);


    function adminCtrl($scope, Reflection, Auth, $location, $http, urls) {
        var vm = this;

        vm.test = 'muci admin';

        vm.randomReflection = '';
        var reflection = new Reflection();
        reflection.getReflection().$promise.then(function(){
            vm.randomReflection = reflection.text;
        });

        vm.logOut = function () {
            Auth.logout(function(){});
            $location.path('/login');
        };

        $scope.gridUsersAdmin = {
            data: null,
            enableFiltering: true,
        };

        $http.get(urls.BASE_API + '/users').success(function(data) {
            $scope.gridUsersAdmin.data = data;

        });



        return $scope.AdminCtrl = vm;

    }

    adminCtrl.$inject = [
        '$scope',
        'Reflection',
        'Auth',
        '$location',
        '$http',
        'urls'
        //'$localStorage',
        //'Auth'
    ];

})();