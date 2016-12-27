let Rx = require('rxjs/Rx');
let request = require('request');
let baseUrl = require('./baseUrl');

module.exports = function teamObserver(team) {
  let url = baseUrl + team.link;
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
