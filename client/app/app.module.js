(function() {
  'use strict'
  angular.module('intranet', [
    'ngRoute',
    'ngMessages',
    'core.modules',
    'apps.pmas'
  ]).config(config)
    .run(getActiveTab)
    .constant('BASE_API_URL', 'http://localhost:8003/')

  function config($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/plans'})
  }

  function getActiveTab( $rootScope, $location ) {
    var path = function() { return $location.path() }
    $rootScope.$watch(path, function(newURL, oldURL){
      var url = newURL.split('/')
      if(url.length > 0 ) $rootScope.activetab = url[3]
    })
  }
})()
