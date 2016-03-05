(function() {

    'use strict';

    function returnFortune($resource, urls){

        function Fortune() {
            this.text = '';
            this.resource = $resource(urls.BASE_API + '/randomFortune', {});
        }

        Fortune.prototype.getFortune = function(){
            var self = this;
            var loadResource = self.resource.get({}, {});

            loadResource.$promise.then(function(res){
                self.text = res.data;
            });
            return loadResource;
        };

        return Fortune;

    }

    returnFortune
        .$inject = ['$resource', 'urls'];
    angular
        .module('app')
        .factory('Fortune', returnFortune)

}());