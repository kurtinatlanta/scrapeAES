var Rx = require('rxjs/Rx');
var request = require('request');
var baseUrl = 'https://www.advancedeventsystems.com/EventResults/';

module.exports = function teamObserver(team) {
  var url = baseUrl + team.link;
  console.log('teamObserver(): Requesting url [' + url + ']');

  return Rx.Observable.create(function subscriber(observer) {
    request(url, function(error, response, html) {
      if (error) {
        console.log('teamObserver(): ' + team.name + ' ERROR ' + error);
        // observer.error(error);
      }
      else {
        observer.next({ response: response, content: html, team: team });
      }

      observer.complete();
    });
  });
};
