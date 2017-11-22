(function() {
    'use strict';

    angular
        .module('pmas')
        .controller('CreatePlan', CreatePlan);

    CreatePlan.$inject = ['$http', '$routeParams'];

    /* @ngInject */
    function CreatePlan($http, $routeParams) {
        var vm = this;
        vm.save = save
        vm.back = function (){ window.history.back() }
        activate();

        function activate() {

        }

        function save() {
          $http.post('http://localhost:8003/appraisals/',{
            'employee_id': $routeParams.e_id,
            'appraiser_id': $routeParams.e_id,
            'dept_id': $routeParams.e_id,
            'period_start': '2017-04-01',
            'period_end': '2018-03-30',
            'sup_length': 9
          }).then(function(res){
            console.log(res.data)
          })
        }
    }
})();
