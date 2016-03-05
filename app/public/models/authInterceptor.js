(function() {

    'use strict';

    function authInterceptor($q, $location, $localStorage){

            return {
                request: function(config) {

                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers['x-access-token'] = $localStorage.token;
                    }
                    return config;
                },

                responseError: function(response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
    }

    authInterceptor
        .$inject = ['$q', '$location', '$localStorage', '$rootScope'];

    angular.module('app')
        .factory('authInterceptor', authInterceptor);

}());