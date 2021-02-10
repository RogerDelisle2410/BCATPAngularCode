var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
  $scope.name = 'World';
})
  .directive('transcludeExample', function () {
    return {
      restrict: 'E',
      transclude: true,
      template: '<p>Hello {{name}}</p><div ng-transclude></div>'
    }
  });
