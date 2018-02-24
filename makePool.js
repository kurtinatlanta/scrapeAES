"use strict";
let fixClubName = require('./fixClubName');
let baseUrl = require('./baseUrl');

function chopTeamName(teamName) {
  let newName = teamName;

  if (newName.indexOf('(') > 0) {
    newName = newName.substr(0, (newName.indexOf('(') - 1));
  }

  return newName;
}

function didWeWin(match) {
  let winner = chopTeamName(match.winner);
  let opponent = chopTeamName(match.opponent);
  let opponentWon = winner.indexOf(opponent);

  if (opponentWon === 0) {
    return 'lost';
  }
  else if (match.winner != "Undecided") {
    return 'won';
  }
  else {
    return 'undecided';
  }
}

function fixOpponent(opponent, teamName, eventType) {
  let newOpponent = fixClubName(opponent, eventType);
  let teamStart = teamName.substr(0, 4);

  if ((newOpponent.startsWith(teamStart)) && (newOpponent.indexOf('A5 South') == -1)) {
    newOpponent = "<strong>" + newOpponent + "</strong>";
  }

  return newOpponent;
}

function getCourt(location) {
  let newLocation = location.substr(0, location.indexOf('at ')).trim();
  newLocation = newLocation.replace('DCC Ct', 'Court');
  newLocation = newLocation.replace('Ct. ', '');
  newLocation = newLocation.replace('Ct ', '');
  // newLocation = newLocation.replace('Court ', '');
  newLocation = newLocation.replace('DCC ', '');
  newLocation = newLocation.replace('Fldhs', 'Fieldhouse');
  newLocation = newLocation.replace('America Cntr ', '');
  newLocation = newLocation.replace('Atl Vb (Boom)', 'Atlanta Boom');
  newLocation = newLocation.replace('Peachtree VBC', 'PCVC');
  newLocation = newLocation.replace(' Richmond CC', '');
  newLocation = newLocation.replace('GICC', 'Court');
  return newLocation;
}

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getDate(location) {
  let matchDate = new Date(location.substr(location.indexOf('at ') + 3));
  matchDate.setYear(2018);
  return days[matchDate.getDay()] + " " + matchDate.getDate() + " " + months[matchDate.getMonth()];
}

function getPoolName(pool, eventType) {
  let brackets = [];

  if (eventType === 'aau') {
    brackets = [
      { regex: /R\dG\dXO/i, name: 'Crossover Match' },
      { regex: /R\dChallenge/i, name: 'Challenge Match' },
      { regex: /R\dGold/i, name: 'Championship Bracket' },
      { regex: /R\dCon/i, name: 'Consolation Bracket' },
      { regex: /R\dRuby/i, name: 'Ruby Bracket' },
      { regex: /R\dDiam/i, name: 'Diamond Bracket' },
      { regex: /R\dSapp/i, name: 'Sapphire Bracket' },
      { regex: /R\dPearl/i, name: 'Pearl Bracket' },
      { regex: /R\dEmer/i, name: 'Emerald Bracket' },
      { regex: /R\dAmeth/i, name: 'Amethyst Bracket' },
      { regex: /R\dCryst/i, name: 'Crystal Bracket' },
      { regex: /R\dGarn/i, name: 'Garnet Bracket' },
      { regex: /R\dTopaz/i, name: 'Topaz Bracket' },
      { regex: /R\dOpal/i, name: 'Opal Bracket' }
    ];
  }
  else if ((eventType === 'usav') || (eventType === 'boys')) {
    brackets = [
      { regex: /R\dG\dXO/i, name: 'Crossover Match' },
      { regex: /CR D\d CH/, name: 'Challenge Match' },
      { regex: /cxC/, name: 'Challenge Match' },
      { regex: /R\d D\d CH/, name: 'Challenge Match' },
      { regex: /R\d D\dCH/, name: 'Challenge Match' },
      { regex: /Gold/, name: 'Gold Bracket' },
      { regex: /GOLD/, name: 'Gold Bracket' },
      { regex: /Slvr/, name: 'Silver Bracket' },
      { regex: /SIL/, name: 'Silver Bracket' },
      { regex: /Brnz/, name: 'Bronze Bracket' },
      { regex: /F10/, name: 'Flight 10' },
      { regex: /Flt 10/, name: 'Flight 10' },
      { regex: /F1$/, name: 'Flight 1' },
      { regex: /Flt 1$/, name: 'Flight 1' },
      { regex: /F2/, name: 'Flight 2' },
      { regex: /Flt 2/, name: 'Flight 2' },
      { regex: /F3/, name: 'Flight 3' },
      { regex: /Flt 3/, name: 'Flight 3' },
      { regex: /F4/, name: 'Flight 4' },
      { regex: /Flt 4/, name: 'Flight 4' },
      { regex: /F5/, name: 'Flight 5' },
      { regex: /Flt 5/, name: 'Flight 5' },
      { regex: /F6/, name: 'Flight 6' },
      { regex: /Flt 6/, name: 'Flight 6' },
      { regex: /F7/, name: 'Flight 7' },
      { regex: /Flt 7/, name: 'Flight 7' },
      { regex: /F8/, name: 'Flight 8' },
      { regex: /Flt 8/, name: 'Flight 8' },
      { regex: /F9/, name: 'Flight 9' },
      { regex: /Flt 9/, name: 'Flight 9' }
    ];
  }

  return brackets.
  filter(function(item) {
    return pool.match(item.regex);
  }).
  reduce(function(previous, current) {
    return (current ? current.name : previous);
  }, 'Pool ' + pool);
}

function getScore(score, lost) {
  let newScore = score;
  let setScores;

  if (lost) {
    setScores = newScore.split(',');

    setScores = setScores.map(function (item) {
      let newItem = item.trim();
      let scoreSplit = newItem.split('-');
      return scoreSplit[1] + '-' + scoreSplit[0];
    });

    newScore = setScores.join(', ');
  }

  return newScore;
}

function getTime(location) {
  let matchDate = new Date(location.substr(location.indexOf('at ') + 3));
  matchDate.setYear(2017);
  let hours = matchDate.getHours();
  let minutes = matchDate.getMinutes().toString();
  let ampm = "";

  if (hours > 12) {
    hours = hours - 12;
    ampm = "pm";
  }
  else if (hours == 12) {
    ampm = "pm";
  }
  else if (hours === 0) {
    hours = 12;
    ampm = "am";
  }
  else {
    ampm = "am";
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  return hours + ":" + minutes + ampm;
}

function pushUnique(theArray, item) {
  let isUnique = true;

  for (let i = 0; i < theArray.length; i++) {
    if (theArray[i] == item) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    theArray.push(item);
  }
}

module.exports = function makePool(teamName, pool, poolData, eventType) {
  let html = "";
  let courts = [];
  let poolStarted = false;
  let startTimes = "";
  let matchList = poolData.matches;

  let numbers = pool.match(/(\d+)/g, pool) || [];
  console.log('makePool(): pool = ' + pool + ', numbers = ' + JSON.stringify(numbers));
  let round = 0;
  let group = 0;
  let poolNumber = 0;
  let matchNumber = 0;

  if ((numbers.length == 2) && (pool.indexOf('P') > 0)) {
    round = parseInt(numbers[0], 10);
    poolNumber = parseInt(numbers[1], 10);
  }
  if ((numbers.length == 2) && (pool.indexOf('M') > 0)) {
    round = parseInt(numbers[0], 10);
    matchNumber = parseInt(numbers[1], 10);
  }
  if ((numbers.length == 2) && (pool.indexOf('Challenge') > 0)) {
    round = parseInt(numbers[0], 10);
    matchNumber = parseInt(numbers[1], 10);
  }
  else if ((numbers.length == 2) && (pool.match(/R\d D\d CH/))) {
    round = parseInt(numbers[0], 10);
    group = parseInt(numbers[1], 10);
    matchNumber = pool.match(/(R\d D\d CH)(.)/)[2];
  }
  else if ((numbers.length == 2) && (pool.match(/R\d D\d CH/))) {
    round = parseInt(numbers[0], 10);
    group = parseInt(numbers[1], 10);
    matchNumber = pool.match(/(R\d D\d CH)(.)/)[2];
  }
  else if ((numbers.length == 2) && (pool.match(/CR D\dCH/))) {
    group = parseInt(numbers[0], 10);
    matchNumber = pool.match(/(CR D\dCH)(.)/)[2];
  }
  else if ((numbers.length == 1) && (pool.match(/CR D\d CH/))) {
    group = parseInt(numbers[0], 10);
    matchNumber = pool.match(/(CR D\d CH)(.)/)[2];
  }
  else if ((numbers.length == 1) && (pool.match(/CR D\dCH/))) {
    group = parseInt(numbers[0], 10);
    matchNumber = pool.match(/(CR D\dCH)(.)/)[2];
  }
  else if ((numbers.length == 3) && (pool.indexOf('XO') > 0)) {
    round = parseInt(numbers[0], 10);
    group = parseInt(numbers[1], 10);
    matchNumber = pool.match(/(R\d[DG]\dXO)(.+)/)[2];
  }
  else if ((numbers.length == 3) && (pool.indexOf('G') > 0)) {
    round = parseInt(numbers[0], 10);
    group = parseInt(numbers[1], 10);
    poolNumber = parseInt(numbers[2], 10);
  }
  else if ((numbers.length == 3) && (pool.match(/R\d D\d/))) {
    round = parseInt(numbers[0], 10);
    group = parseInt(numbers[1], 10);
    poolNumber = parseInt(numbers[2], 10);
  }

  matchList.forEach(function (match) {
    if (match.winner == "Undecided") {
      pushUnique(courts, getCourt(match.location));
    }
    else {
      // console.log("Found result!");
      poolStarted = true;
    }

    let time = getTime(match.location);
    startTimes += time.substr(0, time.indexOf(':'));
  });

  // console.log(startTimes);
  // let seed = inferPlace(startTimes);
  let seed = poolData.rank;

  // html = "<div><b>" + teamName + "</b> - #" + seed + " in " + division + " Pool " + pool;
  if ((round == 1) && (seed == 1)) {
    html = "<div>\n<b>" + teamName + "</b> - #" + poolNumber + " overall seed and #" + seed + " in <a href='" + baseUrl + poolData.poolLink + "' target='new'>" + getPoolName(pool, eventType) + "</a>";
  }
  else if (seed) {
    html = "<div>\n<b>" + teamName + "</b> - #" + seed + " in <a href='" + baseUrl + poolData.poolLink + "' target='new'>" + getPoolName(pool, eventType) + (matchNumber ? " " + matchNumber : "") + "</a>";
  }
  else {
    html = "<div>\n<b>" + teamName + "</b> - <a href='" + baseUrl + poolData.poolLink + "' target='new'><b>" + getPoolName(pool, eventType) + (matchNumber ? " " + matchNumber : "") + "</b></a>";
  }

  if (seed && (courts.length == 1)) {
    html += " on " + courts[0];
  }

  // html += "\n<table class='table tableauto table-striped'>\n<tbody>\n";
  html += "\n<table class='table tableauto table-condensed table-responsive'>\n<tbody>\n";

  let lastDate = '';

  matchList.forEach(function (match) {
    let lost = false;
    let thisDate = getDate(match.location);
    let matchResult = didWeWin(match);

    if (thisDate != lastDate) {
      html += "<tr>\n<td colspan='2'><h5 class='small'>" + thisDate + "</h5></td>\n</tr>\n"
    }

    html += "<tr";

    if (matchResult === 'lost') {
      html += " class='text-muted'";
    }

    html += ">\n";

    // html += "<td style=\"text-align: right\">" + ((lastDate != thisDate) ? thisDate : '&nbsp') + "</td>\n";
    html += "<td style=\"text-align: right\">" + getTime(match.location) + "</td>\n";
    // html += "<td><strong>" + teamName + "</strong> vs. " + fixOpponent(match.opponent, teamName);
    html += "<td>" + fixOpponent(match.opponent, teamName, eventType);

    if ((!seed || (courts.length > 1)) && (match.winner == "Undecided")) {
      html += " on " + getCourt(match.location);
    }

    if (matchResult !== 'undecided') {
      html += '<br><span class="small">';
      let won = (matchResult === 'won');
      let score = getScore(match.score, !won);

      if (won) {
        html += '<span class="fa fa-check" aria-hidden="true">&nbsp;</span><strong>' + score + '</strong>';
      }
      else {
        html += '<span class="fa fa-times" aria-hidden="true">&nbsp;</span>' + score;
      }

      html += '</span>';
    }

    html += "</td>\n</tr>\n";

    lastDate = thisDate;
  });

  html += "</tbody>\n</table>\n";

  if (poolStarted) {
    html += teamName;

    if (poolData.place) {
      switch (poolData.place) {
        case '1':
          html += ' <strong>won their pool</strong> at ';
          break;
        case '2':
          html += ' finished 2nd in their pool at ';
          break;
        case '3':
          html += ' finished 3rd in their pool at ';
          break;
        default:
          html += ' finished ' + poolData.place + 'th in their pool at ';
          break;
      }

      html += poolData.matchesWon + '-' + poolData.matchesLost + '.<br/>\n';
    }
    else {
      html += ' is ' + poolData.matchesWon + '-' + poolData.matchesLost + ' in their pool.<br/>\n';
    }
  }
  else {
    if (poolData.makeGold) {
      html += 'The top ' + ((poolData.makeGold > 1) ? poolData.makeGold + ' teams make ' : ' team makes ') + 'the Championship Bracket.';
    }
    else if (poolData.stayInContention) {
      html += 'The top ' + ((poolData.stayInContention > 1) ? poolData.stayInContention + ' teams stay ' : ' team stays ') + 'in contention.';
    }
    else if (group !== 1) {
      html += teamName + '<br>\n';
    }

    if (poolData.challenge) {
      console.log('makePool(): Challenge. eventType = [' + eventType + '], group = [' + group + ']');
      if (((eventType === 'usav') || (eventType === 'boys')) && group != 1) {
        html += 'Teams will play a challenge match to determine bracket placement.';
      }
      else {
        html += 'Some teams must win a challenge match to stay in contention.';
      }
    }

    if (poolData.crossover) {
      html += 'Teams will play a crossover match after this pool.';
    }
  }

  html += "</div>\n";
  html += "<br/>\n";
  return html;
};
