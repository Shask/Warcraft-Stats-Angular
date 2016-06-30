'use strict';

/**
 * @ngdoc service
 * @name warcraftStatsApp.guildRankingService
 * @description
 * # guildRankingService
 * Service in the warcraftStatsApp.
 */
guildRankingService.$inject = ['$http'];
angular.module('warcraftStatsApp')
  .service('guildRankingService', guildRankingService);


function guildRankingService($http) {
  var BASE_URL_RANKING = "http://localhost:9000/ranking/";
  this.getTopAchievers = getTopAchievers;


  function getTopAchievers()
  {
    var URL_TOP_ACHIEVERS = "achievement/top/5";
    return $http.get(BASE_URL_RANKING + URL_TOP_ACHIEVERS);
  }
}
