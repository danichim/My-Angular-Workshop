(function() {

    'use strict';

    function resolver($q, Auth) {
        return {
            authenticated: function() {
                var currentUser = Auth.getTokenClaims()._doc;
                console.log('currentUser', currentUser);
                if (currentUser && currentUser.email) {
                    return currentUser;
                } else {
                    return $q.reject('not authorized');
                }
            },

            isAdmin: function() {
                var currentUser = Auth.getTokenClaims()._doc;
                console.log('currentUser', currentUser);
                if (currentUser && currentUser.isAdmin === true) {
                    return currentUser
                } else {
                    return $q.reject('not authorized');
                }
            }
        }
    }

    resolver
        .$inject = ['$q', 'Auth'];
    angular
        .module('app')
        .factory('resolver', resolver)

}());