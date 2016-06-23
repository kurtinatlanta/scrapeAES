/**
 * Created by kurt on 2/7/15.
 */
var express = require('express');
var Rx = require('rxjs/Rx');
var app = express();

var tournamentObserver = require('./tournamentObserver');
var divisionObserver = require('./divisionObserver');
var teamObserver = require('./teamObserver');
var scheduleObserver = require('./scheduleObserver');
var poolObserver = require('./poolObserver');
var resultsObserver = require('./resultsObserver');

var makePool = require('./makePool');

var tournamentCodes = require('./tournamentCodes');
var teamCodes = require('./teamCodes');

var divisionList = require('./divisionList');
var teamList = require('./teamList');

app.get('/scrapeAES', function (req, res) {
  "use strict";

  function isTeamPlaying(teamName) {
    // console.log('TEAM PLAYING [' + teamName + ']');
    // return true;
    return teamList[teamName] && teamList[teamName].playing;
  }

  function isTodayOrLater(poolData) {
    var matchList = poolData.matches;
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);

    var lastDate = matchList.
      map(function(match) {
        var location = match.location;
        var matchDate = new Date(location.substr(location.indexOf('at ') + 3));
        matchDate.setYear(2016);
        return matchDate;
      }).
      reduce(function(previous, current) {
        if (!previous) {
          return current;
        }
        else {
          if (current >= previous) {
            return current;
          }
          else {
            return previous;
          }
        }
      });

    // console.log("isTodayOrLater(): today = [" + today + "], lastDate = [" + lastDate + "]");
    return lastDate >= today;
  }

  // Send back the HTML so we can see it
  function generateHtml(teamResults) {
      console.log("generateHtml(): Starting");
      var html = "<html>\n<head>\n";
      html += '<link href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600" rel="stylesheet" type="text/css">\n';
      html += '<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">\n';
      html += '<link rel="stylesheet" href="http://a5volleyball.com/css/style1.css">\n';
      html += "</head>\n<body>\n";

      // groupTeamsByDivision();
      var lastDivision = '';
      var teamFound = {};

      teamResults.filter(team => {
        var returnValue = !teamFound[team.name];
        teamFound[team.name] = true;
        return returnValue;
      }).
      sort(function(a, b) {
        if (divisionList[a.division].rank < divisionList[b.division].rank) {
          return -1;
        }
        else if ((divisionList[a.division].rank > divisionList[b.division].rank)) {
          return 1;
        }
        else {
          if (teamList[a.name].rank < teamList[b.name].rank) {
            return -1;
          }
          else if (teamList[a.name].rank > teamList[b.name].rank) {
            return 1;
          }
          else {
            return 0;
          }
        }
      }).
      forEach(function(team) {
        if (team.division !== lastDivision) {
          html += "<h3>" + team.division + "</h3>\n";
          lastDivision = team.division;
        }

        Object.keys(team.pools).forEach(function(pool) {
          html += makePool(team.name, pool, team.pools[pool]);
        });
      });

      html += "</body>\n</html>\n";
      // console.log(JSON.stringify(teamData));
      res.send(html);
  }

  function extractData(tournamentCode, tournamentTeams) {
    var teamResults = [];

    Rx.Observable.from(Object.keys(tournamentTeams)).
      map(function(key) {
        console.log('extractData(): fetching participating team list for [' + key + ']');
        return tournamentObserver(tournamentCode, tournamentTeams[key]);
      }).
      mergeAll(). // map() returns an array of observables and we want the results from all of them as one array
      map(data => {
        console.log('extractData(): division statusCode = [' + data.response.statusCode + ']');
        return divisionObserver(data.content);
      }).
      mergeAll(). // map() returns an array of observables and we want the results from all of them as one array
      filter(team => isTeamPlaying(team.name)).
      map(team => {
        console.log('extractData(): fetching data for [' + team.name + ']');
        return teamObserver(team);
      }).
      mergeAll(). // map() returns an array of observables and we want the results from all of them as one array
      map(teamData => {
        console.log('extractData(): team status code = [' + teamData.response.statusCode + ']');
        return scheduleObserver(teamData);
      }).
      mergeAll(). // map() returns an array of observables and we want the results from all of them as one array
      filter(team => team.pools).
      map(team => {
        console.log('extractData(): getting pool results for [' + team.name + ']');
        return Rx.Observable.
          from(Object.keys(team.pools)).
          filter(pool => isTodayOrLater(team.pools[pool])). // Only fetch pools from today or later so we make fewer requests
          map(pool => poolObserver(team, pool));
      }).
      mergeAll(). // map() returns an array of arrays of observables, so we must flatten twice.
      mergeAll().
      map(results => {
        console.log('extractData(): fetched pool data status code = [' + results.response.statusCode + ']');
        return resultsObserver(results);
      }).
      mergeAll().
      subscribe(team => {
        console.log('extractData: finished team [' + team.name + ']');
        teamResults.push(team);
      },
      error => console.log(error),
      () => {
        console.log('extractData(): COMPLETED.');
        // console.log('teamResults = ' + JSON.stringify(teamResults));
        generateHtml(teamResults);
      });
  }

  extractData(tournamentCodes.aauNationals, teamCodes.aauGirls);
});

app.listen('3200');

console.log('Magic happens on port 3200');

exports = module.exports = app;
