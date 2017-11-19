(function() {
    'use strict';

    angular
        .module('pmas')
        .controller('EditResource', EditResource);

    EditResource.$inject = ['$http', '$routeParams'];

    /* @ngInject */
    function EditResource($http, $routeParams) {
        var vm = this;
        vm.back = function(){ window.history.back() }
        vm.update = update
        vm.resource = {}
        activate();

        function activate() {
          $http.get('http://localhost:8003/appraisals/' +
                    $routeParams.id +
                    '/resources/' +
                    $routeParams.r_id)
                .then(function(res){
                vm.resource = res.data
            })
        }

        function update() {
          $http
            .put('http://localhost:8003/appraisals/' +
                  $routeParams.id +
                  '/resources/' +
                  $routeParams.r_id, vm.resource)
                  .then(function(res){
                    console.log(res.data)
            })
          }
    }
})();
