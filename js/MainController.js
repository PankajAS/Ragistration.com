app.controller("MainController",function($http, $scope, $interval, $location){ 
    
    $scope.search = function(username) {
      console.log("going to new page: " + username)
      $location.path("/user/" + username)   
    }
       
    $scope.username = "pankajas";
    
  });
