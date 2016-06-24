var eventType = require('./eventType');
var exportedList = {};

var aauDivisions = {
  '18 Open': { playing: true, rank: 1 }, // 23 Jun
  '18 Premier': { playing: true, rank: 2 }, // 23 Jun
  '18 Club': { playing: false, rank: 3 }, // 19 Jun
  '18 Classic': { playing: false, rank: 4 }, // 19 Jun
  '17 Open': { playing: true, rank: 5 }, // 22 Jun
  '17 Premier': { playing: true, rank: 6 }, // 22 Jun
  '17 Club': { playing: true, rank: 7 }, // 23 Jun
  '17 Classic': { playing: true, rank: 8 }, // 23 Jun
  '16 Open': { playing: true, rank: 9 }, // 22 Jun
  '16 Premier': { playing: true, rank: 10 }, // 22 Jun
  '16 Club': { playing: true, rank: 11 }, // 23 Jun
  '16 Aspire': { playing: true, rank: 12 }, // 23 Jun
  '16 Classic': { playing: true, rank: 13 }, // 23 Jun
  '15 Open': { playing: false, rank: 14 }, // 19 Jun
  '15 Premier': { playing: false, rank: 15 }, // 19 Jun
  '15 Club': { playing: false, rank: 16 }, // 19 Jun
  '15 Aspire': { playing: true, rank: 17 }, // 23 Jun
  '15 Classic': { playing: true, rank: 18 }, // 23 Jun
  '14 Open': { playing: false, rank: 19 }, // 19 Jun
  '14 Premier': { playing: false, rank: 20 }, // 19 Jun
  '14 Club': { playing: false, rank: 21 }, // 19 Jun
  '14 Classic': { playing: false, rank: 22 }, // 19 Jun
  '13 Open': { playing: false, rank: 23 }, // 19 Jun
  '13 Club': { playing: false, rank: 24 }, // 19 Jun
  '13 Classic': { playing: true, rank: 25 }, // 19 Jun
  '12 Open': { playing: false, rank: 26 }, // 19 Jun
  '12 Club': { playing: false, rank: 27 }, // 19 Jun
  '12 Classic': { playing: false, rank: 28 }, // 19 Jun
  '11 & Under': { playing: false, rank: 29 }, // 19 Jun
  '10 & Under': { playing: false, rank: 30 }, // 19 Jun
  '18U': { playing: false, rank: 31 }, // 18 Jun
  '16U': { playing: false, rank: 32 }, // 18 Jun
  '14U': { playing: false, rank: 33 } // 18 Jun
};

var usavDivisions = {
  '18 American': { playing: true, rank: 1 },
  '17 Open': { playing: true, rank: 2 },
  '17 National': { playing: false, rank: 3 },
  '17 USA': { playing: false, rank: 4 },
  '17 American': { playing: true, rank: 5 },
  '17 Patriot': { playing: true, rank: 6 },
  '16 Open': { playing: true, rank: 7 },
  '16 National': { playing: true, rank: 8 },
  '16 USA': { playing: true, rank: 9 },
  '16 American': { playing: true, rank: 10 },
  '16 Patriot': { playing: true, rank: 11 },
  '15 Open': { playing: true, rank: 12 },
  '15 National': { playing: true, rank: 13 },
  '15 USA': { playing: false, rank: 14 },
  '15 American': { playing: false, rank: 15 },
  '15 Patriot': { playing: false, rank: 16 },
  '14 Open': { playing: true, rank: 17 },
  '14 National': { playing: true, rank: 18 },
  '14 USA': { playing: false, rank: 19 },
  '14 American': { playing: false, rank: 20 },
  '14 Patriot': { playing: false, rank: 21 },
  '13 Open': { playing: false, rank: 22 },
  '13 National': { playing: false, rank: 23 },
  '13 American': { playing: false, rank: 24 },
  '12 National': { playing: true, rank: 25 },
  '12 American': { playing: false, rank: 26 },
  '11 Patriot': { playing: false, rank: 27 }
};

if (eventType === 'aau') {
  exportedList = Object.assign({}, aauDivisions);
}
else if (eventType === 'usav') {
  exportedList = Object.assign({}, usavDivisions);
}

module.exports = exportedList;
