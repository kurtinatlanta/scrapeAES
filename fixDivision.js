module.exports = function fixDivision(division) {
  var newDivision = division;
  newDivision = newDivision.replace('Girls Club', 'Club');
  newDivision = newDivision.replace('Girls Open', 'Open');
  newDivision = newDivision.replace('USA Division', 'USA');
  return newDivision;
};
