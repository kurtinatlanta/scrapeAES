/**
 * Created by kurt on 2/7/15.
 */
let express = require('express');
let Rx = require('rxjs/Rx');
let app = express();

let tournaments = require('./tournamentCodes');
let extractData = require('./extractData');

app.get('/scrapeAES', function (req, res) {
  "use strict";
  let html = "<html>\n<head>\n";
  html += '<link href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600" rel="stylesheet" type="text/css">\n';
  html += '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">\n';
  html += '<link rel="stylesheet" href="http://a5volleyball.com/css/style1.css">\n';
  html += "</head>\n<body>\n";
  let footer = "</body>\n</html>\n";

  Rx.Observable.from(tournaments)
    .map(tournament => {
      console.log("Running tournament " + JSON.stringify(tournament));
      return extractData(tournament);
    }).
    mergeAll(). // map() returns an array of observables that we need to flatten into an array of the results.
    reduce((previous, current) => {
      return previous + current;
    }, html).
    subscribe(
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

exports = module.exports = app;
