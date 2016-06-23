module.exports = function fixTeamName(teamName) {
  var newName = teamName;
  newName = newName.replace('[+]', '');
  // newName = newName.replace('101', '10');
  // newName = newName.replace('111', '11');
  // newName = newName.replace('121', '12');
  // newName = newName.replace('122', '12');
  // newName = newName.replace('131', '13');
  // newName = newName.replace('132', '13');
  // newName = newName.replace('133', '13');
  // newName = newName.replace('134', '13');
  // newName = newName.replace('135', '13');
  // newName = newName.replace('141', '14');
  // newName = newName.replace('142', '14');
  // newName = newName.replace('143', '14');
  // newName = newName.replace('144', '14');
  // newName = newName.replace('145', '14');
  // newName = newName.replace('14 B', '14');
  // newName = newName.replace('151', '15');
  // newName = newName.replace('152', '15');
  // newName = newName.replace('153', '15');
  // newName = newName.replace('154', '15');
  // newName = newName.replace('161', '16');
  // newName = newName.replace('162', '16');
  // newName = newName.replace('163', '16');
  // newName = newName.replace('16-B', '16');
  // newName = newName.replace('171', '17');
  // newName = newName.replace('172', '17');
  // newName = newName.replace('181', '18');
  // newName = newName.replace('182', '18');
  // newName = newName.replace('183', '18');
  // newName = newName.replace('18-B', '18');
  newName = newName.replace('-1', '');
  newName = newName.replace('-2', '');
  newName = newName.replace('-3', '');
  newName = newName.replace('-4', '');
  newName = newName.replace('-5', '');
  newName = newName.replace('-6', '');
  newName = newName.replace('-', ' ');
  newName = newName.replace('Mizuno ', '');
  newName = newName.replace('Mizuon ', '');
  newName = newName.replace(' F1', ' 1');
  newName = newName.replace(' M1', ' 1');
  newName = newName.replace(' Volleyball Club', ' ');
  newName = newName.replace('Keyeria', 'Keyaira');
  newName = newName.replace('15 Bill', '15 Arieon');
  newName = newName.replace('18/17 Hybrid', '18 Kip');
  newName = newName.replace('18/17 Kip', '18 Kip');
  // newName = newName.replace('15 JJ', 'JJ');
  newName = newName.replace('14 Michelle', '14 LA');
  newName = newName.replace('14 Sandra', '14 Sandy');

  newName = newName.replace('CCJ', 'Capital City Juniors');
  newName = newName.replace('GA5  ', 'GA5 ');
  newName = newName.replace('MIDTN', 'MidTN');
  newName = newName.replace('NAVC', 'North Atlanta');
  newName = newName.replace('RCVC', 'Rocket City');

  if (newName.indexOf('(') > 0) {
    newName = newName.substr(0, (newName.indexOf('(') - 1));
  }

  if (newName.indexOf('ProLink') === 0) {
    newName = newName.replace('Nat', ' National');
  }

  if (newName.indexOf('CAPITAL CITY') === 0) {
    newName = newName.replace('CAPITAL CITY JUNIORS', 'Capital City Juniors');
  }

  return newName;
};