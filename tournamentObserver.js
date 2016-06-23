var Rx = require('rxjs/Rx');
var request = require('request');
var baseUrl = require('./baseUrl');
var eventClubListUrl = 'ClubList.aspx';

module.exports = function tournamentObserver(tournamentCode, clubCode) {
  var url = baseUrl + eventClubListUrl + '?e=' + tournamentCode + '&c=' + clubCode;
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
