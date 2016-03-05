(function() {
    'use strict';

    angular.module('app', [
            'ngResource',
            'ngRoute',
            'ngStorage',
            'ui.grid',
            'ui.grid.edit'
        ])

        .constant('urls', {
            BASE: 'https://workshop-assist.herokuapp.com/',
            BASE_API: 'https://workshop-assist.herokuapp.com/api'
        });

    function run($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function(evt, currentUser, previous, rejection) {
            if (rejection === 'not authorized') {
                $location.path('/login');
            }
        })
    }


    function config($routeProvider, $httpProvider) {
        var routeRoleChecks = {
            user: {
                currentUser: function(resolver) {
                    return resolver.authenticated();
                }
            },
            admin: {
                currentUser: function(resolver) {
                    return resolver.isAdmin();
                }
            }
        };

        $routeProvider
            .when('/login', {
                templateUrl: 'app/public/views/login.view.html',
                controller: 'loginCtrl'
            })
            .when('/user', {
                templateUrl: 'app/public/views/user.view.html',
                controller: 'userCtrl',
                resolve: routeRoleChecks.user
            })
            .when('/register', {
                templateUrl: 'app/public/views/register.view.html',
                controller: 'registerCtrl'
            })
            .when('/admin', {
                templateUrl: 'app/public/views/admin.view.html',
                controller: 'adminCtrl',
                resolve: routeRoleChecks.admin
            })
            .otherwise({ redirectTo: '/login' });

        $httpProvider.interceptors.push('authInterceptor');

    }


    config
        .$inject = ['$routeProvider', '$httpProvider'];
    run
        .$inject = ['$rootScope', '$location'];

    angular
        .module('app')
        .config(config)
        .run(run)

}());