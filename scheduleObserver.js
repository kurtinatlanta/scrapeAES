let Rx = require('rxjs/Rx');
let cheerio = require('cheerio');
let fixPool = require('./fixPool');

module.exports = function scheduleObserver(teamData) {
  // console.log('scheduleObserver(): teamData = [' + JSON.stringify(teamData) + ']');
  let team = teamData.team;
  let $ = cheerio.load(teamData.content);

  let schedule = $('.list').first();

  return Rx.Observable.create(function subscriber(observer) {
    schedule.children('tbody').children('tr').each(function (/* index, item */) {
      let teamItems = [];
      let poolLink = "";

      $(this).children().filter('td').each(function (/* index1, item1 */) {
        let links = $(this).children('a');
        let linkUrl = "";

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

      let scheduleItem = {
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

    // console.log('scheduleObserver(): teamData = [' + JSON.stringify(team) + ']');
    observer.next(team);
    observer.complete();
  });
};

