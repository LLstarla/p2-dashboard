(function() {
  var app;

  app = angular.module('portal', []);

  app.controller('MainCtrl', function($scope) {
    this.tabIndex = 1;
    this.cpanels = [
      {
        name: 'ホスティング 1vCPU/1GB',
        code: '1'
      }, {
        name: 'ホスティング 2vCPU/4GB',
        code: '2'
      }
    ];
    this.currentCpanel = '1';
  });

}).call(this);
