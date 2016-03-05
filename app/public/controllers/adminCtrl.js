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
            columnDefs: [
                {
                    field: '_id',
                    enableCellEdit: false
                },
                {
                    field: 'email',
                    enableCellEdit: false
                },
                {
                    field: 'name',
                    displayName: 'Numele',
                    enableCellEdit: true
                },
                {
                    field: 'isAdmin',
                    enableFiltering: false,
                    width: '10%'
                }
            ]
        };

        $http.get(urls.BASE_API + '/users').success(function(data) {
            $scope.gridUsersAdmin.data = data;
        });

        //$scope.gridUsersAdmin.onRegisterApi = function(gridApi) {
        //    //set gridApi on scope
        //    $scope.gridApi = gridApi;
        //    gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {
        //        //Do your REST call here via $http.get or $http.post
        //
        //        //Alert to show what info about the edit is available
        //        alert('Column: ' + colDef.name + ' ID: ' + rowEntity.id + ' Name: ' + rowEntity.name + ' Age: ' + rowEntity.age);
        //    });
        //};



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