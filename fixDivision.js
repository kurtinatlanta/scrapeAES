module.exports = function fixDivision(division) {
  let newDivision = division;
  newDivision = newDivision.replace('Girls Club', 'Club');
  newDivision = newDivision.replace('Girls Open', 'Open');
  newDivision = newDivision.replace('USA Division', 'USA');
  return newDivision;
};
