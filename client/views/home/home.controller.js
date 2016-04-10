'use strict';

angular.module('chessReplay')
  .controller('HomeCtrl', function () {

    var vm = this;

    vm.board = new Chessboard('board', 'start');
    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
