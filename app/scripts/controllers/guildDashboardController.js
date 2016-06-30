/**
 * Created by excilys on 30/06/16.
 */

/**
 * @ngdoc function
 * @name warcraftStatsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the warcraftStatsApp
 */
guildDashboardController.$inject = ['guildRankingService'];
angular.module('warcraftStatsApp')
  .controller('guildDashboardController',guildDashboardController);


    function guildDashboardController(guildRankingService) {
      var vm = this;
      guildRankingService.getTopAchievers().then(function (response){
          var data = response.data;


          var topAchieversChartData ={};
          topAchieversChartData.data = [];
          topAchieversChartData.labels = [];

          for(var i = 0; i<5;i++)
          {
            topAchieversChartData.data[i] = data[i].achievement;
            topAchieversChartData.labels[i] = data[i].name;
          }
          topAchieversChartData.colors = [
            '#DCDCDC', // light grey
            '#FDB45C', // yellow
            '#4D5360',  // dark grey
            '#DF7B04', // gold
            '#AAAAAA' //navy
          ];
          vm.topAchieversChartData = topAchieversChartData;
        }
      );
    }
