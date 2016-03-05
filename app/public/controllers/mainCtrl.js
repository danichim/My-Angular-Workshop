(function() {

    'use strict';

    function MainCtrl($scope){
        var vm = this;

        return $scope.MainCtrl = vm;
    }

    MainCtrl
        .$inject = ['$scope'];

    angular.module('app')
        .controller('MainCtrl', MainCtrl);

}());