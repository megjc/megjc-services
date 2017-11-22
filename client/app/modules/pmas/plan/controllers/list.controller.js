(function() {
    'use strict'
    angular.module('apps.pmas').controller('Plan', Plan)
    Plan.$inject = [ 'planService' ]
    /* @ngInject */
    function Plan( planService) {
      var vm = this
      activate()

      function activate() {
        planService.getPlans().then(function(plans){
          vm.plans = plans
        })
      }
  }
})();
