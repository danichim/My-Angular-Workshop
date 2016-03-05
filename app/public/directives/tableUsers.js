(function () {

    'use strict';

    function tableUsers(){
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'app/public/views/table.view.html'
        }
    }

    angular.module('app')
        .directive('tableUsers', tableUsers);

}());