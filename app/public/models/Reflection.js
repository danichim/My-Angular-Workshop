(function() {

    'use strict';

    function returnReflection($resource, urls){

        function Reflection() {
            this.text = '';
            this.resource = $resource(urls.BASE_API + '/randomReflection', {});
        }

        Reflection.prototype.getReflection = function(){
            var self = this;
            var loadResource = self.resource.get({}, {});

            loadResource.$promise.then(function(res){
                self.text = res.data;
            });
            return loadResource;
        };

        return Reflection;

    }

    returnReflection
        .$inject = ['$resource', 'urls'];
    angular
        .module('app')
        .factory('Reflection', returnReflection)

}());