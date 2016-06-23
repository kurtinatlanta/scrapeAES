var masterTeamList = {
  'A5 18 Bob': false,
  'A5 18 Katie': false,
  'A5 18 Duane': true,
  'A5 17 Jing': true,
  'A5 17 Marc': true,
  'A5 16 Gabe': true,
  'A5 16 Gary': true,
  'A5 16 Matt': true,
  'A5 15 Scoba': true,
  'A5 15 JJ': true,
  'A5 15 Earl': true,
  'A5 15 Erik': true,
  'A5 14 Suzanne': true,
  'A5 14 Karen': true,
  'A5 14 Betty': true,
  'A5 14 LA': true,
  'A5 14 Tory': true,
  'A5 13 PC': true,
  'A5 13 Nikki': true,
  'A5 13 Anna': true,
  'A5 13 Haley': true,
  'A5 13 Tina': true,
  'A5 12 Jing': true,
  'A5 12 Bri': true,
  'A5 12 Keyaira': true,
  'A5 12 Erin': true,
  'A5 12 Sarah': true,
  'A5 12 Denise': true,
  'A5 11 Walter': true,
  'A5 11 Shelley': true,
  'A5 11 Yuri': true,
  'A5 10 Haley': true,
  'A5 10 Jon': true,
  'A5 18 Marc': true,
  'A5 18 Kip': true,
  'A5 16 Erin': true,
  'A5 14 Kip': true,
  'GA5 18 April': true,
  'GA5 18 Marlon': true,
  'GA5 17 Suzanne': true,
  'GA5 17 Alex': true,
  'GA5 16 Kelsey': true,
  'GA5 16 Jessica': true,
  'GA5 16 Christine': true,
  'GA5 15 Mike': true,
  'GA5 15 Jaileen': true,
  'GA5 15 Karen': true,
  'GA5 15 Scott': true,
  'GA5 14 Sandy': true,
  'GA5 14 Kaylin': true,
  'GA5 14 Brianna': true,
  'GA5 13 Alexis': true,
  'GA5 13 Cate': true,
  'GA5 12 Jasmine': true,
  'GA5 11 Susan': true,
  'A5 South 18 Joe': true,
  'Tsunami 18 Kele/Joe': false
};

var aauSession1 = {
  // AAU Session 1
  'A5 183 Duane': { playing: false, rank: 3 },
  'A5 South 18 Joe': { playing: false, rank: 4 },
  'GA5 18 April': { playing: false, rank: 5 },
  'GA5 18 Marlon': { playing: false, rank: 6 },
  'A5 151 SCOBA': { playing: false, rank: 21 },
  'A5 152 JJ': { playing: false, rank: 22 },
  'A5 153 Earl': { playing: false, rank: 23 },
  'A5 South 15 Jason': { playing: false, rank: 25 },
  'A5 South 15 Robert': { playing: false, rank: 26 },
  'GA5 15 Jaileen': { playing: false, rank: 29 },
  'A5 141 Suzanne': { playing: false, rank: 31 },
  'A5 143 Betty': { playing: false, rank: 33 },
  'A5 145 Tory': { playing: false, rank: 35 },
  'A5 South 14 Dave/Joe': { playing: false, rank: 36 },
  'A5 131 PC': { playing: false, rank: 37 },
  'A5 132 Nikki': { playing: false, rank: 38 },
  'A5 133 Hybrid': { playing: false, rank: 39 },
  'A5 135 Tina': { playing: false, rank: 41 },
  'A5 121 Jing': { playing: false, rank: 42 },
  'A5 111 Walter': { playing: false, rank: 43 },
  'A5 101 Haley': { playing: false, rank: 44 },
  // AAU Boys
  'A5 18 Marc': { playing: false, rank: 45 },
  'A5 16 Erin': { playing: false, rank: 46 },
  'A5 14 Kip': { playing: false, rank: 47 }
};

var aauSession2 = {
  // AAU Session 2
  'A5 171 Jing': { playing: true, rank: 7 },
  'A5 172 Marc': { playing: true, rank: 8 },
  'A5 South 17 James': { playing: true, rank: 9 },
  'A5 161 Gabe': { playing: true, rank: 13 },
  'A5 162 Gary': { playing: true, rank: 14 },
  'A5 South 16 Joe': { playing: true, rank: 15 }
};

var aauSession3 = {
  // AAU Session 3
  'A5 181 Bob': { playing: true, rank: 1 },
  'A5 182 Katie': { playing: true, rank: 2 },
  'A5 South 17 Jamie': { playing: true, rank: 10 },
  'GA5 17 Alex': { playing: true, rank: 12 },
  'A5 163 Matt': { playing: true, rank: 13 },
  'A5 South 16 Hannah': { playing: true, rank: 16 },
  'A5 South 16 Derrick': { playing: true, rank: 17 },
  'GA5 16 Kelsey': { playing: true, rank: 18 },
  'GA5 16 Jessica': { playing: true, rank: 19 },
  'GA5 16 Christine': { playing: true, rank: 20 },
  'A5 154 Erik': { playing: true, rank: 24 },
  'A5 South 15 Charlette': { playing: true, rank: 27 },
  'GA5 15 Karen': { playing: true, rank: 30 }
};

// module.exports = Object.assign({}, morningTeamsPlaying, afternoonTeamsPlaying);
module.exports = Object.assign({}, aauSession2, aauSession3);
// module.exports = Object.assign({}, aauSession2);
