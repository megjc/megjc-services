(function() {
    'use strict';

    angular.module('pmas').controller('CreateActivity', CreateActivity)
    CreateActivity.$inject = [
      '$routeParams',
      '$http',
      '$scope',
      'notify'
    ]
    /* @ngInject */
    function CreateActivity($routeParams, $http, $scope, notify) {
        var vm = this
        vm.plan_id = ''
        vm.activity = {}
        vm.save = save
        vm.back = function(){ window.history.back() }
        activate();

        function activate() {
          vm.plan_id = $routeParams.id
        }

        function save(){
          $http
            .post('http://localhost:8003/appraisals/' + $routeParams.id + '/activities',{
              'employee_id': "Affassss",
              'appraisal_id': $routeParams.id,
              'objective': vm.activity.objective,
              'key_activity': vm.activity.key_activity,
              'output': vm.activity.output,
              'standard': vm.activity.standard,
              'target': vm.activity.target,
              'actual_performance': ''
            }).then(function(res){
              vm.message = res.data
              vm.activity = {}
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
