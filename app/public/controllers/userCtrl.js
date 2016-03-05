(function () {
    'use strict';

    angular
        .module('app')
        .controller('userCtrl', userCtrl);


    function userCtrl($scope, Fortune, Auth, $location, $http, urls) {
        var vm = this;

        vm.test = 'muci user';

        vm.randomFortune = '';
        var fortune = new Fortune();
        fortune.getFortune().$promise.then(function(){
            vm.randomFortune = fortune.text;
        });

        vm.logOut = function () {
            Auth.logout(function(){});
            $location.path('/login');
        };

        $scope.gridUsers = {
            data: null,
            enableFiltering: true,
        };

        $http.get(urls.BASE_API + '/users').success(function(data) {
            $scope.gridUsers.data = data;

        });

        return $scope.UserCtrl = vm;

    }

    userCtrl.$inject = [
        '$scope',
        'Fortune',
        'Auth',
        '$location',
        '$http',
        'urls'
    ];

})();