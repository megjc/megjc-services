/**
* @desc Main module file.
* @author Tremaine Buchanan
* @since 2017-06
*/
(function() {
'use strict';

angular.module('pmas', [
  'ngRoute',
  'ngMessages'
]).config(config).run(getActiveTab);

function config($routeProvider){
  $routeProvider.when('/plans', {
    controller: 'Plan as vm',
    title: 'PMAS Workplans',
    templateUrl: 'js/views/list.html'
  }).when('/plans/:id/work-plan', {
    controller: 'Activity as vm',
    title: 'PMAS Workplans',
    templateUrl: 'js/views/plan-view.html'
  }).when('/plans/:id/work-plan/create-activity', {
    controller: 'CreateActivity as vm',
    title: 'PMAS Workplans',
    templateUrl: 'js/views/create-activity.html'
  }).when('/plans/:id/work-plan/:ac_id/edit', {
    controller: 'EditActivity as vm',
    title: 'PMAS Workplans',
    templateUrl: 'js/views/edit-activity.html'
  }).when('/plans/:id/work-plan/resource-needs', {
    controller: 'Resources as vm',
    title: 'PMAS Workplans',
    templateUrl: 'js/views/resource-needs.html'
  }).when('/plans/:id/work-plan/create-resource', {
    controller: 'CreateResource as vm',
    title: 'Create Resource',
    templateUrl: 'js/views/resources-create.html'
  }).when('/plans/:id/work-plan/resource-needs/:r_id/edit', {
    controller: 'EditResource as vm',
    title: 'Edit Resource',
    templateUrl: 'js/views/resources-edit.html'
  }).when('/plans/:e_id/create-plan', {
    controller: 'CreatePlan as vm',
    title: 'Create Work Plan',
    templateUrl: 'js/views/create-plan.html'
  }).otherwise({redirectTo: '/plans'})
}

/**
* Extracts tab identifier from a given URL
* @param  {[type]} $rootScope [description]
* @param  {[type]} $location  [description]
* @return {[type]}            [description]
*/
function getActiveTab( $rootScope, $location ) {
  var path = function() { return $location.path() }
  $rootScope.$watch(path, function(newURL, oldURL){
    var url = newURL.split('/')
  //  console.log(url)
    if(url.length > 0 ) $rootScope.activetab = url[3]
    console.log(url)
    console.log($rootScope.activetab)
  })
}
})();
