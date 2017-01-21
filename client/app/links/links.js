angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = { links: [] };

  var init = function() {
    Links.getAll()
      .then(function(links) {
        console.log('Link collection:', links);
        if (links) {
          links.forEach(function(link) {
            $scope.data.links.push(link);
          });
        }
      });
  };

  init();

});
