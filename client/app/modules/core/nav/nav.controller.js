(function() {
    'use strict';

    angular
        .module('core.modules')
        .controller('Nav', Nav);

    Nav.$inject = ['navService'];

    /* @ngInject */
    function Nav(navService) {
        var vm = this;

        activate();

        function activate() {
          navService.getNumberofPlans().then(function(count){
            vm.count = count
          })
        }
    }
})();
