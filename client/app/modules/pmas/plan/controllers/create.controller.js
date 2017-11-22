(function() {
    'use strict';

    angular
        .module('apps.pmas')
        .controller('CreatePlan', CreatePlan);

    CreatePlan.$inject = ['planService'];

    /* @ngInject */
    function CreatePlan(planService) {
        var vm = this;
        vm.back = function(){ window.history.back() }
        vm.save = save
        activate();

        function activate() {

        }
        function save() {
          planService.createPlan(vm.plan).then(function(res){
            console.log(res)
          })
        }
    }
})();
