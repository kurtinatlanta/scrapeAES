import Rx from 'rxjs';
import request from 'request';
import baseUrl from './baseUrl';

export default function poolObserver(team, poolName) {
  let pool = team.pools[poolName];
  let url = baseUrl + pool.poolLink;
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
}
