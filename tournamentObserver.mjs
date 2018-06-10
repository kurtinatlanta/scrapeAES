import Rx from 'rxjs';
import request from 'request';
import baseUrl from './baseUrl';
let eventClubListUrl = 'ClubList.aspx';

export default function tournamentObserver(tournamentCode, clubCode) {
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
}
