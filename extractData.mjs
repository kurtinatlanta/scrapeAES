import Rx from 'rxjs';

import tournamentObserver from './tournamentObserver';
import divisionObserver from './divisionObserver';
import teamObserver from './teamObserver';
import scheduleObserver from './scheduleObserver';
import poolObserver from './poolObserver';
import resultsObserver from './resultsObserver';

import makePool from './makePool';

// import divisionList from './divisionList';
import teamList from './teamList';

function isTeamPlaying(teamName) {
  console.log('TEAM PLAYING [' + teamName + '] = [' + (teamList[teamName] && teamList[teamName].playing) + ']');
  // return true;
  return teamList[teamName] && teamList[teamName].playing;
}

function isTodayOrLater(poolData) {
  let matchList = poolData.matches;
  let today = new Date();
  today.setHours(0);
  today.setHours(today.getHours()); // AWS uses UTC
  today.setMinutes(0);
  today.setSeconds(0);

  let lastDate = matchList
    .map(function(match) {
      let location = match.location;
      let matchDate = new Date(location.substr(location.indexOf('at ') + 3));
      matchDate.setYear(2018);
      return matchDate;
    })
    .reduce(function(previous, current) {
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

  console.log(`isTodayOrLater(): [${(lastDate >= today)}] - today = [${today}], lastDate = [${lastDate}]`);
  return lastDate >= today;
}
/*
function sortTeamsUsingDivisons(a, b) {
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
}
*/
function sortTeams(a, b) {
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

// Send back the HTML so we can see it
function generateHtml(teamResults, name, eventType) {
  console.log('generateHtml(): Starting');
  let html = '<h2>' + name + '</h2>\n';

  // groupTeamsByDivision();
  let lastDivision = '';
  let teamFound = {};

  teamResults
    .filter(team => {
      let returnValue = !teamFound[team.name];
      teamFound[team.name] = true;
      return returnValue;
    })
    .sort(sortTeams)
    .forEach(function(team) {
      if (team.division !== lastDivision) {
        html += '<h3>' + team.division + '</h3>\n';
        lastDivision = team.division;
      }

      Object.keys(team.pools)
        .filter(function(pool) {
          return isTodayOrLater(team.pools[pool]);
        })
        .forEach(function(pool) {
          html += makePool(team.name, pool, team.pools[pool], eventType);
        });
    });

  // console.log(JSON.stringify(teamData));
  return html;
}

export default function extractData(tournament) {
  return Rx.Observable.create(function subscriber(observer) {
    let teamResults = [];

    Rx.Observable.from(Object.keys(tournament.clubs))
      .map(function(key) {
        console.log('extractData(): fetching participating team list for [' + key + ']');
        return tournamentObserver(tournament.code, tournament.clubs[key]);
      })
      .mergeAll() // map() returns an array of observables and we want the results from all of them as one array
      .map(data => {
        console.log('extractData(): division statusCode = [' + data.response.statusCode + ']');
        return divisionObserver(data.content);
      })
      .mergeAll() // map() returns an array of observables and we want the results from all of them as one array
      .filter(team => isTeamPlaying(team.name))
      .map(team => {
        console.log('extractData(): fetching data for [' + team.name + ']');
        return teamObserver(team);
      })
      .mergeAll() // map() returns an array of observables and we want the results from all of them as one array
      .map(teamData => {
        console.log('extractData(): team status code = [' + teamData.response.statusCode + ']');
        return scheduleObserver(teamData);
      })
      .mergeAll() // map() returns an array of observables and we want the results from all of them as one array
      .filter(team => team.pools)
      .map(team => {
        console.log('extractData(): getting pool results for [' + team.name + ']');
        return Rx.Observable.
          from(Object.keys(team.pools)).
          filter(pool => isTodayOrLater(team.pools[pool])). // Only fetch pools from today or later so we make fewer requests
          map(pool => poolObserver(team, pool));
      })
      .mergeAll() // map() returns an array of arrays of observables, so we must flatten twice.
      .mergeAll()
      .map(results => {
        console.log('extractData(): fetched pool data status code = [' + results.response.statusCode + ']');
        return resultsObserver(results, tournament.eventType);
      })
      .mergeAll()
      .subscribe(
        (team) => {
          console.log('extractData: finished team [' + team.name + ']');
          teamResults.push(team);
        },
        (error) => console.log(error),
        () => {
          console.log('extractData(): COMPLETED.');
          // console.log('teamResults = ' + JSON.stringify(teamResults));
          observer.next(generateHtml(teamResults, tournament.name, tournament.eventType));
          observer.complete();
        });
  });
}
