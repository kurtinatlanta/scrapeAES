let Rx = require('rxjs/Rx');
let request = require('request');
let baseUrl = require('./baseUrl');
let eventClubListUrl = 'ClubList.aspx';

module.exports = function tournamentObserver(tournamentCode, clubCode) {
  let url = baseUrl + eventClubListUrl + '?e=' + tournamentCode + '&c=' + clubCode;
  console.log('tournamentObserver(): Requesting url [' + url + ']');

  return Rx.Observable.create(function subscriber(observer) {
    request(url, function(error, response, html) {
      if (error) {
        console.log('tournamentObserver(): ERROR ' + error);
        // observer.error(error);
      }
      else {
        observer.next({ response: response, content: html });
      }

      observer.complete();
    });
  });
};
