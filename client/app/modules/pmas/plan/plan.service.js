(function() {
  'use strict';

  angular.module('apps.pmas').service('planService', planService);

  planService.$inject = ['$http', 'BASE_API_URL'];

  /* @ngInject */
  function planService($http, BASE_API_URL) {
     var service = {
       getPlans:getPlans,
       createPlan: createPlan
     }

     return service

     function getPlans() {
       return $http.get(BASE_API_URL + 'appraisals?employee_id=tttttttt')
                  .then(function(res){
         return res.data
       })
     }

     function createPlan( plan ) {
        return $http.post(BASE_API_URL + 'appraisals',{
           'employee_id': $routeParams.e_id,
           'appraiser_id': $routeParams.e_id,
           'dept_id': $routeParams.e_id,
           'period_start': '2017-04-01',
           'period_end': '2018-03-30',
           'sup_length': 9
         }).then(function(res){
           return res.data
         })
     }
  }
})();
