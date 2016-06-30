'use strict';

describe('Service: guildRankingService', function () {

  // load the service's module
  beforeEach(module('warcraftStatsApp'));

  // instantiate service
  var guildRankingService;
  beforeEach(inject(function (_guildRankingService_) {
    guildRankingService = _guildRankingService_;
  }));

  it('should do something', function () {
    expect(!!guildRankingService).toBe(true);
  });

});
