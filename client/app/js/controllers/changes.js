(function() {
    'use strict'
    angular.module('pmas').controller('Changes', Changes)
    Changes.$inject = [
      '$scope',
      'notify',
      '$http',
      '$routeParams'
    ]
    /* @ngInject */
    function Changes( $scope, notify, $http, $routeParams) {
      var vm = this
      vm.toggle = toggle
      vm.save = save
      vm.active = false
      vm.activities = []
      vm.activity = {}
      vm.back = back
      var url = 'http://localhost:8003/appraisals/'
      vm.plan_id = $routeParams.id
      //activate()

      function activate() {

       $http.get(url + $routeParams.id + '/activities')
            .then(function(res){
               vm.activities = res.data
        })
      }

      function toggle(){
        vm.active = !vm.active
      }

      function back(){
        window.history.back()
      }

      function save(){
        $http.post(url + vm.plan_id + '/activities',{
            'employee_id': "Affassss",
            'appraisal_id': vm.plan_id,
            'objective': vm.activity.objective,
            'key_activity': vm.activity.key_activity,
            'output': vm.activity.output,
            'standard': vm.activity.standard,
            'target': vm.activity.target,
            'actual_performance': vm.activity.actual_performance
          }).then(function(res){
            vm.message = res
            notify.emitEvent('notification')
          })
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
