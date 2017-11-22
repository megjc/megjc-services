(function() {
    'use strict';

    angular
        .module('core.modules')
        .service('navService', navService);

  navService.$inject = ['$http', 'BASE_API_URL'];

    /* @ngInject */
    function navService($http, BASE_API_URL) {
        var service = {
            getNumberofPlans: getNumberofPlans
        }

        return service

        function getNumberofPlans() {
          return $http.get(BASE_API_URL + 'appraisals?employee_id=tttttttt')
                      .then(function(res){
                        return res.data.length
                      })
        }
    }
})();
