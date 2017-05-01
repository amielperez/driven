'use strict';

var dashboardCtrl = require('../features/dashboard/dashboard.ctrl');
var dashboard = require('../features/dashboard/dashboard.dir')

var task = require('../common/task/task.dir')
var taskFactory = require('../common/task/task.fact')
var taskCtrl = require('../common/task/task.ctrl')

var navbar = require('../common/navbar/navbar.dir')
var navbarCtrl = require('../common/navbar/navbar.ctrl')

var addTaskCtrl = require('../features/add-task/addTask.ctrl')
var addTask = require('../features/add-task/addTask.dir')

var projectFactory = require('../common/project/project.fact')
var projectBoardCtrl = require('../features/project-kanban/projectBoard.ctrl')
var projectBoard = require('../features/project-kanban/projectBoard.dir')

var addProject = require('../features/add-project/addProject.dir')
var addProjectCtrl = require('../features/add-project/addProject.ctrl')

var registerToApp = (app) => {
  app.controller('dashboardCtrl', ['$scope', '$rootScope', '$uibModal', 'envService', 'projectFactory', dashboardCtrl])
  app.directive('dashboard', [dashboard])
  app.directive('task', [task])
  app.directive('navbar', [navbar])
  app.controller('navbarCtrl', ['$scope', '$rootScope', navbarCtrl])
  app.controller('addTaskCtrl', ['$scope', '$rootScope', 'taskFactory', addTaskCtrl])
  app.directive('addTask', [addTask])
  app.factory('taskFactory', ['$resource', 'envService', taskFactory])
  app.factory('projectFactory', ['$resource', 'envService', projectFactory])
  app.controller('projectBoardCtrl', ['$scope', '$rootScope', '$uibModal', 'taskFactory', projectBoardCtrl])
  app.directive('projectBoard', [projectBoard])
  app.controller('taskCtrl', ['$scope', taskCtrl])
  app.directive('addProject', [addProject])
  app.controller('addProjectCtrl', ['$scope', 'projectFactory', addProjectCtrl])
}

module.exports = registerToApp;
