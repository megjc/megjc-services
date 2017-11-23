(function() {
    'use strict';

    angular.module('pmas').controller('EditActivity', EditActivity)
    EditActivity.$inject = [
      '$routeParams',
      '$http',
      '$scope',
      'notify'
    ]
    /* @ngInject */
    function EditActivity($routeParams, $http, $scope, notify) {
        var vm = this
        vm.plan_id = ''
        vm.activity = {}
        vm.update = update
        vm.back = back
        activate();

        function activate() {
          //console.log('edit')
          $http.get('http://localhost:8003/appraisals/' + $routeParams.id + '/activities/' + $routeParams.ac_id)
               .then(function(res){
                 vm.activity = res.data
               })
        }

        function back() { window.history.back() }

        function update(){
          $http
            .put('http://localhost:8003/appraisals/' + $routeParams.id + '/activities/' + $routeParams.ac_id,{
              'employee_id': vm.activity.employee_id,
              'appraisal_id': $routeParams.id,
              'objective': vm.activity.objective,
              'key_activity': vm.activity.key_activity,
              'output': vm.activity.output,
              'standard': vm.activity.standard,
              'target': vm.activity.target
            }).then(function(res){
              vm.message = res.data
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
