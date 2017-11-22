(function() {
    'use strict';

    angular.module('apps.pmas', []).config(config)

    function config($routeProvider) {
      $routeProvider.when('/plans', {
        controller: 'Plan as vm',
        title: 'Workplans',
        templateUrl: 'templates/pmas/plan-list.html'
      })
    }
})();
