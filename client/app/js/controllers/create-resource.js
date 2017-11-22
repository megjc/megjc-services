(function() {
    'use strict';

    angular
        .module('pmas')
        .controller('CreateResource', CreateResource);

    CreateResource.$inject = ['$http', '$routeParams'];

    /* @ngInject */
    function CreateResource($http, $routeParams) {
        var vm = this;
        vm.back = function(){ window.history.back() }
        vm.save = save
        vm.resource = {}
        activate();

        function activate() {

        }

        function save() {
          vm.resource.appraisal_id = $routeParams.id
          $http.post('http://localhost:8003/appraisals/' + $routeParams.id + '/resources', vm.resource)
              .then(function(res){
                vm.resource = {}
              })
        }
    }
})();
