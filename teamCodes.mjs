let eventType = 'usav';
let exportedList = {};

// A5 team codes
/*
let a5 = '39';
let a5_prime = '-56632';
let a5_prime2 = '-50109';
let a5_aau = '-62830';
let ga5 = '1148';
let ga5_prime = '-56323';
let ga5_prime2 = '-50021';
let ga5_aau = '-64921';
*/
/*
let boys = {
  a5Boys: '-50659'
};
*/
let aauGirls = {
  a5: '-62830',
  a5South: '-63896',
  ga5: '-64921'
};

let usavGirls = {
  a5: '39',
  a5South: '5869',
  ga5: '1148',
  bvc: '1024',
  ccj: '2971',
  clubWest: '4208',
  cobbAtlanta: '1501',
  midTN: '3163',
  northAtlanta: '1812',
  prolink: '1893',
  rocketCity: '564',
  tsunami: '1164'
};

let usavBoys = {
  'a5': '39'
};

if (eventType === 'aau') {
  exportedList = Object.assign({}, aauGirls);
  // exportedList = Object.assign({}, aauSession2);
  // exportedList = Object.assign({}, aauSession3);
  // exportedList = Object.assign({}, aauSession2, aauSession3);
}
else if (eventType === 'usav') {
  exportedList = Object.assign({}, usavGirls);
}
else if (eventType === 'boys') {
  exportedList = Object.assign({}, usavBoys);
}

export default exportedList;
