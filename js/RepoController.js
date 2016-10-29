app.controller("RepoController",function($scope, $http, $routeParams){
    var contributorready = function(response) {
      $scope.contributors = response.data;
	 
    };
    
    var ready = function(response) {
      var contributors_url = response.data.contributors_url;
	  
      $http.get(contributors_url)
        .then(contributorready, error);
    };

    var error = function(reason) {
      $scope.message = reason;
    };

    var getrepo = function() {
      $http.get("https://api.github.com/repos/" + $scope.username + "/" + $scope.reponame)
        .then(ready, error);
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
	console.log($scope.username+' '+ $scope.reponame);
    getrepo();
  });