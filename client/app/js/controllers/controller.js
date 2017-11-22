(function() {
    'use strict'
    angular.module('pmas').controller('Plan', Plan)
    Plan.$inject = [
      '$scope',
      'notify',
      '$http',
      '$routeParams'
    ]
    /* @ngInject */
    function Plan( $scope, notify, $http, $routeParams) {
      var vm = this
      vm.toggle = toggle
      vm.active = false
      vm.activities = []
      vm.activity = {}
      activate()

      function activate() {
        vm.plan_id = $routeParams.id
        $http.get('http://localhost:8003/appraisals')
             .then(function(res){
               vm.plans = res.data
             })
      // if(vm.plan_id){
      //   $http.get('http://localhost:8003/appraisals/' + vm.plan_id)
      //        .then(function(res){
      //          vm.activity = res.data
      //          console.log(res.data)
      //        })
      //      }
      }

      function toggle(){
        vm.active = !vm.active
      }



      notify.subscribe($scope, 'notification', function(){
        vm.notification = {
          'success' : vm.message.success,
          'text': vm.message.text,
          'show': true
        }
      })
    }
})();
