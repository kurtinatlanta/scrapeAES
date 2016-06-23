"use strict";
var fixClubName = require('./fixClubName');
var baseUrl = require('./baseUrl');

function chopTeamName(teamName) {
  var newName = teamName;

  if (newName.indexOf('(') > 0) {
    newName = newName.substr(0, (newName.indexOf('(') - 1));
  }

  return newName;
}

function didWeWin(match) {
  var winner = chopTeamName(match.winner);
  var opponent = chopTeamName(match.opponent);
  var opponentWon = winner.indexOf(opponent);

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

function fixOpponent(opponent, teamName) {
  var newOpponent = fixClubName(opponent);
  var teamStart = teamName.substr(0, 3);

  if ((newOpponent.indexOf(teamStart) === 0) && (newOpponent.indexOf('A5 South') == -1)) {
    newOpponent = "<strong>" + newOpponent + "</strong>";
  }

  return newOpponent;
}

function getCourt(location) {
  var newLocation = location.substr(0, location.indexOf('at ')).trim();
  newLocation = newLocation.replace('Ct. ', '');
  newLocation = newLocation.replace('Ct ', '');
  // newLocation = newLocation.replace('Court ', '');
  newLocation = newLocation.replace('DCC ', '');
  newLocation = newLocation.replace('Fldhs', 'Fieldhouse');
  newLocation = newLocation.replace('America Cntr ', '');
  newLocation = newLocation.replace('Atl Vb (Boom)', 'Atlanta Boom');
  newLocation = newLocation.replace('Peachtree VBC', 'PCVC');
  newLocation = newLocation.replace(' Richmond CC', '');
  newLocation = newLocation.replace('GIC', 'Court');
  return newLocation;
}

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getDate(location) {
  var matchDate = new Date(location.substr(location.indexOf('at ') + 3));
  matchDate.setYear(2016);
  return days[matchDate.getDay()] + " " + matchDate.getDate() + " " + months[matchDate.getMonth()];
}

function getPoolName(pool) {
  var brackets = [
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

  return brackets.
  filter(function(item) {
    return pool.match(item.regex);
  }).
  reduce(function(previous, current) {
    return (current ? current.name : previous);
  }, 'Pool ' + pool);
}

function getScore(score, lost) {
  var newScore = score;
  var setScores;

  if (lost) {
    setScores = newScore.split(',');

    setScores = setScores.map(function (item) {
      var newItem = item.trim();
      var scoreSplit = newItem.split('-');
      return scoreSplit[1] + '-' + scoreSplit[0];
    });

    newScore = setScores.join(', ');
  }

  return newScore;
}

function getTime(location) {
  var matchDate = new Date(location.substr(location.indexOf('at ') + 3));
  matchDate.setYear(2016);
  var hours = matchDate.getHours();
  var minutes = matchDate.getMinutes().toString();
  var ampm = "";

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
  var isUnique = true;

  for (var i = 0; i < theArray.length; i++) {
    if (theArray[i] == item) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    theArray.push(item);
  }
}

module.exports = function makePool(teamName, pool, poolData) {
  var html = "";
  var courts = [];
  var poolStarted = false;
  var startTimes = "";
  var matchList = poolData.matches;

  var numbers = pool.match(/(\d+)/g, pool);
  // console.log('makePool(): pool = ' + pool + ', numbers = ' + JSON.stringify(numbers));
  var round = 0;
  var group = 0;
  var poolNumber = 0;
  var matchNumber = 0;

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
  else if ((numbers.length == 3) && (pool.indexOf('XO') > 0)) {
    round = parseInt(numbers[0], 10);
    group = parseInt(numbers[1], 10);
    matchNumber = pool.match(/(R\dG\dXO)(.+)/)[2];
  }
  else if ((numbers.length == 3) && (pool.indexOf('G') > 0)) {
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

    var time = getTime(match.location);
    startTimes += time.substr(0, time.indexOf(':'));
  });

  // console.log(startTimes);
  // var seed = inferPlace(startTimes);
  var seed = poolData.rank;

  // html = "<div><b>" + teamName + "</b> - #" + seed + " in " + division + " Pool " + pool;
  if ((round == 1) && (seed == 1)) {
    html = "<div>\n<b>" + teamName + "</b> - #" + poolNumber + " overall seed and #" + seed + " in <a href='" + baseUrl + poolData.poolLink + "' target='new'>" + getPoolName(pool) + "</a>";
  }
  else if (seed) {
    html = "<div>\n<b>" + teamName + "</b> - #" + seed + " in <a href='" + baseUrl + poolData.poolLink + "' target='new'>" + getPoolName(pool) + (matchNumber ? " " + matchNumber : "") + "</a>";
  }
  else {
    html = "<div>\n<b>" + teamName + "</b> - <a href='" + baseUrl + poolData.poolLink + "' target='new'><b>" + getPoolName(pool) + (matchNumber ? " " + matchNumber : "") + "</b></a>";
  }

  if (seed && (courts.length == 1)) {
    html += " on " + courts[0];
  }

  // html += "\n<table class='table tableauto table-striped'>\n<tbody>\n";
  html += "\n<table class='table tableauto table-condensed table-responsive'>\n<tbody>\n";

  var lastDate = '';

  matchList.forEach(function (match) {
    var lost = false;
    var thisDate = getDate(match.location);
    var matchResult = didWeWin(match);

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
    html += "<td>" + fixOpponent(match.opponent, teamName);

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
      html += 'Teams may have to win a challenge match to stay in contention.';
    }

    if (poolData.crossover) {
      html += 'Teams may play a crossover match after this pool.';
    }
  }

  html += "</div>\n";
  html += "<br/>\n";
  return html;
};
