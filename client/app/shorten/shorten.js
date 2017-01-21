angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne()
      .then(function(resp) {
        console.log(resp);
      });
  };
});
