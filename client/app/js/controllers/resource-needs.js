(function() {
    'use strict'
    angular.module('pmas')
           .controller('Resources', Resources)
           .filter('displayHyphen', displayHyphen)


    function displayHyphen() {
      return function( date ){
        var d1 = new Date(2015, 9, 21)
        var d2 = new Date(date)
        if(d1.getTime() == d2.getTime()) return '-'
        return date
      }
    }

    Resources.$inject = [
      '$scope',
      'notify',
      '$http',
      '$routeParams'
    ]
    /* @ngInject */
    function Resources( $scope, notify, $http, $routeParams) {
      var vm = this
      vm.toggle = toggle
      vm.save = save
      vm.active = false
      vm.back = back
      vm.activities = []
      vm.activity = {}
      var url = 'http://localhost:8003/appraisals/'
      activate()

      function activate() {
       vm.plan_id = $routeParams.id
       $http.get(url + $routeParams.id + '/resources')
            .then(function(res){
               vm.resources = res.data
        })
      }

      function toggle(){
        vm.active = !vm.active
      }

      function back() {
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
            console.log(res)
          })

        // vm.message = {
        //   'success': true,
        //   'text': 'Work plan item successfully added.',
        //   'show': true
        // }
        // toggle()
        // notify.emitEvent('notification')
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
