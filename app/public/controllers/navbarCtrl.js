(function(){

    'use strict';

    function navbarCtrl($scope, $uibModal, userAuth, userSignUp, $rootScope, $state){
        $scope.user = {};
        //  Get Users Data If User is Logged
        userAuth.getUser().then(function success(response){
            $scope.user = response.data;
        });

    }

    navbarCtrl
        .$inject =['$scope', '$uibModal', 'userAuth', 'userSignUp', '$rootScope', '$state'];

    angular.module('Airwavz')
        .controller('navbarCtrl', navbarCtrl);

}());