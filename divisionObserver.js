var Rx = require('rxjs/Rx');
var cheerio = require('cheerio');
var fixTeamName = require('./fixTeamName');
var fixDivision = require('./fixDivision');

module.exports = function divisionObserver(content) {
  // console.log('divisionObservable(): content = [' + content + ']');
  var $ = cheerio.load(content);

  return Rx.Observable.create(function subscriber(observer) {
    var list = $('.list tr').each(function (/* index, item */) {
      var teamRows = [];

      $(this).children().filter('td').children().filter('a').each(function (/* index1, item1 */) {
        teamRows.push({link: $(this).attr('href'), text: $(this).text().trim()});
      });

      if (teamRows.length > 0) {
        observer.next({
          name: fixTeamName(teamRows[0].text),
          link: teamRows[0].link,
          division: fixDivision(teamRows[1].text),
          divisionLink: teamRows[1].link,
          pools: {}
        });
      }
    });

    observer.complete();
  });
};

