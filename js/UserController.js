app.controller("UserController",function($scope, $http, $routeParams){
    var repoready = function(response) {
      $scope.repos = response.data;
    };
   
    var ready = function(response) {
      $scope.user = response.data;
      
      $http.get($scope.user.repos_url)
          .then(repoready, error);
    };

    var error = function(reason) {
      $scope.error = reason.data.message;
    };
    
    var getuser = function(username) {
      $http.get("https://api.github.com/users/" + username)
          .then(ready, error);
    };
    
    var username = $routeParams.username;
    getuser(username);
  });