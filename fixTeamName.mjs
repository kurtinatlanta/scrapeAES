export default function fixTeamName(teamName) {
  let newName = teamName;
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
  // newName = newName.replace('12-5', '12-5 Kathryn');
  // newName = newName.replace('12-6', '12-5 Dani');
  // newName = newName.replace('13-5', '13-5 Alex');
  // newName = newName.replace('16-3', '16-3 Liang');
  // newName = newName.replace('17-3', '17-3 Helen');
  newName = newName.replace('A5 Mizuno Volleyball Club F10-1 Jon', 'A5 10 Jon');
  newName = newName.replace('A5 Mizuno Volleyball Club F10-2', 'A5 10 Sherri');
  newName = newName.replace('A5 Mizuno Volleyball Club F11-1 Walter', 'A5 11 Walter');
  newName = newName.replace('A5 Mizuno Volleyball Club F11-2', 'A5 11 Janet');
  newName = newName.replace('A5 Mizuno Volleyball Club F11-3', 'A5 11 Erin');
  newName = newName.replace('A5 Mizuno Volleyball Club F12-2 Jake', 'A5 12 Jake');
  newName = newName.replace('A5 Mizuno Volleyball Club F12-3', 'A5 12 Liz');
  newName = newName.replace('A5 Mizuno Volleyball Club F12-4', 'A5 12 Mercedes');
  newName = newName.replace('A5 Mizuno Volleyball Club F12-5', 'A5 12 Jordan');
  newName = newName.replace('A5 Mizuno Volleyball Club F12-6', 'A5 12 Donna');
  newName = newName.replace('A5 Mizuno Volleyball Club F13-2 Anna', 'A5 13 Anna');
  newName = newName.replace('A5 Mizuno Volleyball Club F13-3 Betty', 'A5 13 Betty');
  newName = newName.replace('A5 Mizuno Volleyball Club F13-4 Tina', 'A5 13 Tina');
  newName = newName.replace('A5 Mizuno Volleyball Club F13-5 Kendra', 'A5 13 Kendra');
  newName = newName.replace('A5 Mizuno Volleyball Club F14-1 Suzanne', 'A5 14 Suzanne');
  newName = newName.replace('A5 Mizuno Volleyball Club F14-2 Karen', 'A5 14 Karen');
  newName = newName.replace('A5 Mizuno Volleyball Club F14-3 Allison', 'A5 14 Allison');
  newName = newName.replace('A5 Mizuno Volleyball Club F14-4 Alex', 'A5 14 Alex');
  newName = newName.replace('A5 Mizuno Volleyball Club F14-5 Brianna', 'A5 14 Brianna');
  newName = newName.replace('A5 Mizuno Volleyball Club F15-2 JJ', 'A5 15 JJ');
  newName = newName.replace('A5 Mizuno Volleyball Club F15-3 LA', 'A5 15 LA');
  newName = newName.replace('A5 Mizuno Volleyball Club F15-4 Sydney', 'A5 15 Sydney');
  newName = newName.replace('A5 Mizuno Volleyball Club F16-2 Scott', 'A5 16 Scott');
  newName = newName.replace('A5 Mizuno Volleyball Club F16-3 Liang', 'A5 16 Liang');
  newName = newName.replace('A5 Mizuno Volleyball Club F17-2 Marc', 'A5 17 Marc');
  newName = newName.replace('A5 Mizuno Volleyball Club F17-3 Lisa', 'A5 17 Lisa');
  newName = newName.replace('A5 Mizuno Volleyball Club M14-1', 'A5 14 Kip');
  newName = newName.replace('A5 Mizuno Volleyball Club M14-2', 'A5 14 Rachel');
  newName = newName.replace('A5 Mizuno Volleyball Club M16-1', 'A5 16 Carlos');
  newName = newName.replace('A5 Mizuno Volleyball Club M18-1', 'A5 18 T-Nol');
  newName = newName.replace('11-3', '11-3 Erin');
  newName = newName.replace('-1', '');
  newName = newName.replace('-2', '');
  newName = newName.replace('-3', '');
  newName = newName.replace('-4', '');
  newName = newName.replace('-5', '');
  newName = newName.replace('-6', '');
  // newName = newName.replace('-', ' ');
  newName = newName.replace('Mizuno ', '');
  newName = newName.replace('Mizuon ', '');
  newName = newName.replace(' F1', ' 1');
  newName = newName.replace(' M1', ' 1');
  newName = newName.replace(' Volleyball Club', ' ');
  // newName = newName.replace('Keyeria', 'Keyaira');
  // newName = newName.replace('15 Bill', '15 Arieon');
  // newName = newName.replace('18/17 Hybrid', '18 Kip');
  // newName = newName.replace('18/17 Kip', '18 Kip');
  // newName = newName.replace('15 JJ', 'JJ');
  // newName = newName.replace('14 Michelle', '14 LA');
  // newName = newName.replace('14 Sandra', '14 Sandy');

  // newName = newName.replace('CCJ', 'Capital City Juniors');
  // newName = newName.replace('GA5  ', 'GA5 ');
  // newName = newName.replace('MIDTN', 'MidTN');
  // newName = newName.replace('NAVC', 'North Atlanta');
  // newName = newName.replace('RCVC', 'Rocket City');

  if (newName.indexOf('(') > 0) {
    newName = newName.substr(0, (newName.indexOf('(') - 1));
  }

  if (newName.startsWith('ProLink')) {
    newName = newName.replace('Nat', ' National');
  }

  if (newName.startsWith('Cobb Atlanta  ')) {
    newName = newName.replace('  ', ' ');
  }

  if (newName.startsWith('CAPITAL CITY')) {
    newName = newName.replace('CAPITAL CITY JUNIORS', 'Capital City Juniors');
  }

  return newName;
}
