'use strict';

var addTaskCtrl = ($scope, $rootScope, taskFactory) => {
  $scope.vm['project_id'] = $scope.vmproject.id
  $scope.saveTask = () => {
    taskFactory.save($scope.vm).$promise.then((savedResource) => {
      $scope.$emit('task:added', savedResource)
    })
  }
}

module.exports = addTaskCtrl;
