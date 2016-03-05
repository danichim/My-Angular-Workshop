(function () {
    'use strict';

    angular
        .module('app', [
            'ngResource',
            'ngRoute',
            'ngStorage'
        ])

        .constant('urls', {
            BASE: 'https://workshop-assist.herokuapp.com/',
            BASE_API: 'https://workshop-assist.herokuapp.com/api'
        });
        //.config(config),
        //.run(run);

    function config($routeProivder, $httpProvider) {
        var routeRoleChecks = {
            user: {
                currentUser: function(resolver){
                    return resolver.authenticated();
                }
            },
            admin: {
                currentUser: function(resolver){
                    return resolver.isAdmin();
                }
            }
        };

        $routeProivder
            //.when('/', {
            //    controller: 'HomeController',
            //    templateUrl: 'home/home.view.html',
            //    controllerAs: 'vm'
            //})

            .when('/login', {
                controller: 'loginCtrl',
                templateUrl: 'app/public/views/login.view.html',
                controllerAs: 'vm'
            })
            .when('/user', {
                controller: 'userCtrl',
                templateUrl: 'app/public/views/user.view.html',
                controllerAs: 'vm',
                resolve: routeRoleChecks.user
            })

            //.when('/register', {
            //    controller: 'RegisterController',
            //    templateUrl: 'register/register.view.html',
            //    controllerAs: 'vm'
            //})

            .otherwise({ redirectTo: '/login' });
    }

    config.$inject = ['$routeProvider', '$httpProvider'];

    angular.module('app')
        .config(config);

    window.angular.module('app');

})();