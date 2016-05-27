angular.module('userService',[])
.factory('user', function($http) {
  var userFactory = {};
  userFactory.create = function(userData) {
    return $http.post('/api/signup', userData);
  };

  userFactory.all = function() {
    return $http.get('/api/users');
  };
});
