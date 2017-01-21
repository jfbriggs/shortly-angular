angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    console.log('Link being passed:', $scope.link);

    Links.addOne($scope.link)
      .then(function(resp) {
        console.log(resp);
      });
      
    $scope.link = {};
  };
});
