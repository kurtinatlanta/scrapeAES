var Rx = require('rxjs/Rx');
var request = require('request');
var baseUrl = 'https://www.advancedeventsystems.com/EventResults/';

module.exports = function poolObserver(team, poolName) {
  var pool = team.pools[poolName];
  var url = baseUrl + pool.poolLink;
  console.log('poolObserver(): Requesting url [' + url + ']');

  return Rx.Observable.create(function subscriber(observer) {
    request(url, function(error, response, html) {
      if (error) {
        console.log('poolObserver(): ' + team.name + ' pool ' + poolName + ' ERROR ' + error);
        // observer.error(error);
      }
      else {
        observer.next({ response: response, content: html, teamData: team, poolName: poolName });
      }

      observer.complete();
    });
  });
};
