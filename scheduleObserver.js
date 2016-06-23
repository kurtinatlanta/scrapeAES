var Rx = require('rxjs/Rx');
var cheerio = require('cheerio');
var fixPool = require('./fixPool');

module.exports = function scheduleObserver(teamData) {
  // console.log('divisionObservable(): content = [' + content + ']');
  var team = teamData.team;
  var $ = cheerio.load(teamData.content);

  var schedule = $('.list').first();

  return Rx.Observable.create(function subscriber(observer) {
    schedule.children('tr').each(function (/* index, item */) {
      var teamItems = [];
      var poolLink = "";

      $(this).children().filter('td').each(function (/* index1, item1 */) {
        var links = $(this).children('a');
        var linkUrl = "";

        if (links && links.length > 0) {
          teamItems.push(links.text().trim());
          linkUrl = links.first().attr('href');

          if (linkUrl.indexOf("PlayResults") > -1) {
            poolLink = linkUrl;
          }
        }
        else {
          teamItems.push($(this).text().trim());
        }
      });

      var scheduleItem = {
        pool: fixPool(teamItems[1]),
        poolLink: poolLink,
        opponent: teamItems[2],
        location: teamItems[3],
        winner: teamItems[4],
        score: teamItems[5]
      };

      if (scheduleItem.pool) {
        if (!team.pools[scheduleItem.pool]) {
          team.pools[scheduleItem.pool] = {
            pool: scheduleItem.pool,
            poolLink: poolLink,
            matches: []
          };
        }

        /*
        if (!team.matches) {
          team.matches = [];
        }
        */
        team.pools[scheduleItem.pool].matches.push(scheduleItem);
        // team.matches.push(scheduleItem);
      }
    });

    observer.next(team);
    observer.complete();
  });
};

