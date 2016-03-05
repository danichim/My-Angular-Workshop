(function() {

    "use strict";

    function UsersFactory($resource) {

        function Users() {}

        Users.prototype = {

            login: function(username, pass) {
                var user = $resource('http://192.168.150.235:6969/auth/login',
                    {}, {headers: { 'Content-Type': 'application/json'}});
                return user.save({"username":username, "password": pass}).$promise;
            },

            isAuthenticated: function(session) {
                var authentication = $resource('http://192.168.150.235:6969/auth/authenticated',
                    {}, {headers: { 'Content-Type': 'application/json', 'Authorization': 'test', "Access-Control-Allow-Credentials": 'true'}});
                return authentication.get().$promise;
            }

        };

        return Users;
    }

    UsersFactory
        .$inject = ['$resource'];

    angular
        .module('app')
        .factory('UsersFactory', UsersFactory)

}());