'use strict';

angular.module('chessReplay')
  .controller('HomeCtrl', function () {
    vm.board = new Chessboard();

    var vm = this;

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
