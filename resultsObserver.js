var Rx = require('rxjs/Rx');
var cheerio = require('cheerio');
var fixTeamName = require('./fixTeamName');
var eventType = require('./eventType');

module.exports = function resultsObserver(resultsData) {
  // console.log('divisionObservable(): content = [' + content + ']');
  var teamData = resultsData.teamData;
  var teamName = teamData.name;
  var pool = teamData.pools[resultsData.poolName];
  var $ = cheerio.load(resultsData.content);

  return Rx.Observable.create(function subscriber(observer) {
    var results = $('.list').first();

    console.log("fetchPoolResults(): Getting pool results for team [" + teamName + "] in pool [" + resultsData.poolName + "]");

    results.children('tr.list_odd_row').each(function (index /*, item */) {
      var columns = [];

      $(this).children().filter('td').each(function (/* index1, item1 */) {
        columns.push($(this).text().trim());
      });

      var resultTeam = columns[0];

      if (resultTeam && (fixTeamName(resultTeam) == teamName)) {
        pool.matchesWon = columns[1];
        pool.matchesLost = columns[2];
        pool.setsWon = columns[3];
        pool.setsLost = columns[4];
        pool.matchWinPct = columns[5];
        pool.setsWinPct = columns[6];
        pool.pointRatio = columns[7];
        pool.place = columns[8];
        pool.rank = (index * 2) + 1;
        // console.log("teamName = [" + teamName + "] - pool = [" + poolName + "], pool.rank = [" + pool.rank + "]");
      }
      else {
        // console.log("teamName = [" + teamName + "] in pool = [" + poolName + "] - found team = [" + resultTeam + "]");
      }
    });

    results.children('tr.list_even_row').each(function (index /*, item */) {
      var columns = [];

      $(this).children().filter('td').each(function (/* index1, item1 */) {
        columns.push($(this).text().trim());
      });

      var resultTeam = columns[0];

      if (resultTeam && (fixTeamName(resultTeam) == teamName)) {
        console.log("teamName = [" + teamName + "] - pool = [" + resultsData.poolName + "], pool.place = [" + columns[8] + "]");
        pool.matchesWon = columns[1];
        pool.matchesLost = columns[2];
        pool.setsWon = columns[3];
        pool.setsLost = columns[4];
        pool.matchWinPct = columns[5];
        pool.setsWinPct = columns[6];
        pool.pointRatio = columns[7];
        pool.place = columns[8];
        pool.rank = (index * 2) + 2;
      }
      else {
        // console.log("teamName = [" + teamName + "] in pool = [" + poolName + "] - found team = [" + resultTeam + "]");
      }
    });

    pool.stayInContention = 0;
    pool.makeGold = 0;
    var inContention;
    var crossover = /\(R\dG\dXO/;
    var challenge;
    var gold;

    if (eventType === 'aau') {
      inContention = /\(R\dG1/;
      challenge = /\(R\dChallenge/i;
      gold = /\(R\dGOLD/i;
    }
    else if (eventType === 'usav') {
      inContention = /\(R\d D1/;
      challenge = /\(CR.*CH/i;
      gold = /\( Gold/i;
    }

    // Get the last table in the page, which will help us determine what's next.
    results = $('.list').
      last().
      children('tr').
      filter(function() {
        return !($(this).hasClass('list_header_row'))
      }).
      each(function(index, item) {
        var columns = [];

        $(this).children().filter('td').each(function (index1, item1) {
          columns.push($(this).text().trim());
        });

        if (columns[1] && columns[1].match(inContention)) {
          pool.stayInContention++;
        }

        if (columns[1] && columns[1].match(gold)) {
          pool.makeGold++;
        }

        if (columns[1] && columns[1].match(crossover)) {
          pool.crossover = true;
        }

        if (columns[1] && columns[1].match(challenge)) {
          pool.challenge = true;
        }
      });

    observer.next(teamData);
    observer.complete();
  });
};

