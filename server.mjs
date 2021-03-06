/**
 * Created by kurt on 2/7/15.
 */
import express from 'express';
import events from 'events';
import Rx from 'rxjs';
let app = express();

// Increase the max listeners
events.EventEmitter.prototype._maxListeners = 100;

import tournaments from './tournamentCodes';
import extractData from './extractData';

app.get('/scrapeAES', function (req, res) {
  let html = '<html>\n<head>\n';
  html += '<link href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600" rel="stylesheet" type="text/css">\n';
  html += '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">\n';
  html += '<link rel="stylesheet" href="http://a5volleyball.com/css/style1.css">\n';
  html += '</head>\n<body>\n';
  let footer = '</body>\n</html>\n';

  Rx.Observable.from(tournaments).
    map(tournament => {
      console.log(`Running tournament ${JSON.stringify(tournament)}`);
      return extractData(tournament);
    })
    .mergeAll() // map() returns an array of observables that we need to flatten into an array of the results.
    .reduce((previous, current) => {
      return previous + current;
    }, html)
    .subscribe(
      content => {
        content += footer;
        res.send(content);
      },
      error => console.log(error),
      () => {
        console.log('app.get(): COMPLETED.');
      }
    );
});

app.listen(process.env.PORT || '8081');

console.log('Magic happens on port 8081');

export default app;
