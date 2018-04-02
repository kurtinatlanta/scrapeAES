let masterTeamList = {
  'A5 18 Bob': { playing: true, rank: 1 },
  'A5 18 John': { playing: true, rank: 2 },
  'A5 18 Tee': { playing: true, rank: 3 },
  'A5 17 Jing': { playing: true, rank: 4 },
  'A5 17 Marc': { playing: true, rank: 5 },
  'A5 17 Lisa': { playing: true, rank: 6 },
  'A5 16 Gabe': { playing: true, rank: 7 },
  'A5 16 Scott': { playing: true, rank: 8 },
  'A5 16 Liang': { playing: true, rank: 9 },
  'A5 15 Boba': { playing: true, rank: 10 },
  'A5 15 JJ': { playing: true, rank: 11 },
  'A5 15 LA': { playing: true, rank: 12 },
  'A5 15 Sydney': { playing: true, rank: 13 },
  'A5 14 Suzanne': { playing: true, rank: 14 },
  'A5 14 Karen': { playing: true, rank: 15 },
  'A5 14 Allison': { playing: true, rank: 16 },
  'A5 14 Alex': { playing: true, rank: 17 },
  'A5 14 Brianna': { playing: true, rank: 18 },
  'A5 13 Earl': { playing: true, rank: 19 },
  'A5 13 Anna Marie': { playing: true, rank: 20 },
  'A5 13 Betty': { playing: true, rank: 21 },
  'A5 13 Tina': { playing: true, rank: 22 },
  'A5 13 Kendra': { playing: true, rank: 23 },
  'A5 12 Jing': { playing: true, rank: 24 },
  'A5 12 Jake': { playing: true, rank: 25 },
  'A5 12 Liz': { playing: true, rank: 26 },
  'A5 12 Mercedes': { playing: true, rank: 27 },
  'A5 12 Jordan': { playing: true, rank: 28 },
  'A5 12 Donna': { playing: true, rank: 29 },
  'A5 11 Walter': { playing: true, rank: 30 },
  'A5 11 Janet': { playing: true, rank: 31 },
  'A5 11 Erin': { playing: true, rank: 32 },
  'A5 10 Jon': { playing: true, rank: 34 },
  'A5 10 Sherri': { playing: true, rank: 35 },
  // Boys
  'A5 18 Boys': { playing: true, rank: 36 },
  'A5 18 T-Nol': { playing: true, rank: 36 },
  'A5 16 Boys': { playing: true, rank: 37 },
  'A5 16 Carlos': { playing: true, rank: 37 },
  'A5 14 Boys': { playing: true, rank: 38 },
  'A5 14 Kip': { playing: true, rank: 38 },
  'A5 14 Boys 2': { playing: true, rank: 39 },
  'A5 14 Rachel': { playing: true, rank: 39 }
};

let aauSession1 = {
  // AAU Session 1
  'A5 141 Suzanne': { playing: false, rank: 14 },
  'A5 142 Karen': { playing: false, rank: 15 },
  'A5 143 Anna': { playing: false, rank: 16 },
  'A5 145 Sydney': { playing: false, rank: 17 },
  'A5 131 Jackie': { playing: false, rank: 18 },
  'A5 132 Earl': { playing: false, rank: 19 },
  'A5 133 Hybrid': { playing: false, rank: 20 },
  'A5 121 Jing': { playing: false, rank: 21 },
  'A5 111 Walter': { playing: false, rank: 22 },
  'A5 South 14 Trina': { playing: false, rank: 31 },
  'A5 South 14 Samantha': { playing: false, rank: 32 },
};

let aauSession2 = {
  // AAU Session 2
  'A5 183 KB': { playing: false, rank: 3 },
  'GA5 18 April': { playing: false, rank: 33 },
  'GA5 18 Jazmine': { playing: false, rank: 34 },
};

let aauSession3 = {
  // AAU Session 3
  'A5 171 Jing': { playing: false, rank: 4 },
  'A5 172 Marc': { playing: false, rank: 5 },
  'A5 173 Helen': { playing: false, rank: 6 },
  'A5 151 Boba': { playing: true, rank: 10 },
  'A5 152 JJ': { playing: false, rank: 11 },
  'A5 153 LA': { playing: false, rank: 12 },
  'A5 154 Haley': { playing: false, rank: 13 },
  'A5 South 17 Taylor': { playing: false, rank: 24 },
  'A5 South 17 Charlette': { playing: false, rank: 25 },
  'A5 South 15 JMAC': { playing: false, rank: 28 },
  'A5 South 15 Derick': { playing: false, rank: 29 },
  'A5 South 15 Amber': { playing: false, rank: 30 },
  'GA5 15 Arieon': { playing: false, rank: 38 },
  'GA5 15 Jaileen': { playing: false, rank: 39 }
};

let aauSession4 = {
  // AAU Session 4
  'A5 181 Bob': { playing: false, rank: 1 },
  'A5 182 John': { playing: false, rank: 2 },
  'A5 161 Gabe': { playing: false, rank: 7 },
  'A5 162 Gary': { playing: false, rank: 8 },
  'A5 163 Liang': { playing: false, rank: 9 },
  'A5 South 18 Jason': { playing: false, rank: 23 },
  'A5 South 16 Joe': { playing: false, rank: 26 },
  'A5 South 16 Natash': { playing: false, rank: 27 },
  'GA5 16 Brian': { playing: false, rank: 35 },
  'GA5 16 Christine': { playing: false, rank: 36 },
  'GA5 16 Beverly': { playing: true, rank: 37 }
};

let usavGirls = {
  // 25 Jun
  'A5 14 Suzanne': { playing: false, rank: 1 },
  'A5 14 Karen': { playing: false, rank: 2 },
  'A5 South 14 Trina': { playing: false, rank: 3 },
  'NAVC 14 Bri': { playing: false, rank: 4 },
  'Tsunami 14 Tad S141E': { playing: false, rank: 5 },
  'Atlanta Extreme 14A NATL': { playing: false, rank: 6 },
  // 26 Jun
  'A5 15 Boba': { playing: false, rank: 7 },
  'A5 15 JJ': { playing: false, rank: 8 },
  'Tsunami 15 Dun S151E': { playing: false, rank: 9 },
  'RCVC 151': { playing: false, rank: 10 },
  'Cobb Atlanta 15 Kelsey': { playing: false, rank: 11 },
  // 27 Jun
  'A5 12 Jing': { playing: false, rank: 12 },
  'A5 12 Grace': { playing: false, rank: 13 },
  'NAVC 12 Amanda': { playing: false, rank: 14 },
  // 28 Jun
  'A5 13 Jackie': { playing: false, rank: 15 },
  'A5 13 Earl': { playing: false, rank: 16 },
  'NAVC 13 Courtney': { playing: false, rank: 17 },
  'Cobb Atlanta 13 Jessica': { playing: false, rank: 18 },
  'Tsunami 13 Singo S131E': { playing: false, rank: 19 },
  // 30 Jun
  'A5 17 Jing': { playing: false, rank: 20 },
  'Tsunami 17 Rafael S171E': { playing: false, rank: 21 },
  'A5 17 Marc': { playing: false, rank: 22 },
  'GA5 17 Luis': { playing: false, rank: 23 },
  'A5 17 Helen': { playing: false, rank: 24 },
  'Cobb ATL 17  Michael': { playing: false, rank: 25 },
  'A5 South 17 Taylor': { playing: false, rank: 26 },
  // 1 Jul
  'A5 16 Gabe': { playing: false, rank: 27 },
  'A5 16 Gary': { playing: false, rank: 28 },
  'A5 South 16 Joe': { playing: false, rank: 29 },
  'Tsunami 16 Dun S161E': { playing: false, rank: 30 }
};

let usavBoys = {
  // 29 Jun
  'A5 18 Boys': { playing: false, rank: 31 },
  // 30 Jun
  'A5 14 Boys': { playing: true, rank: 32 },
  // 1 Jul
  'A5 16 Erin': { playing: false, rank: 33 }
};

module.exports = Object.assign({}, masterTeamList);
