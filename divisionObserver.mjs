import Rx from 'rxjs';
import cheerio from 'cheerio';
import fixTeamName from './fixTeamName';
import fixDivision from './fixDivision';

export default function divisionObserver(content) {
  // console.log('divisionObservable(): content = [' + content + ']');
  let $ = cheerio.load(content);

  return Rx.Observable.create(function subscriber(observer) {
    $('.list tr').each(function (/* index, item */) {
      let teamRows = [];

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
}
