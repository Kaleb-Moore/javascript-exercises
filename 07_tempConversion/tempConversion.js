const ftoc = function(temp) {
  let newTemp = ((temp - 32) * (5/9));
  let round = Math.round(newTemp * 10) / 10;
  return round;
};

const ctof = function(temp) {
  let newTemp = ((temp * (9/5) + 32));
  let round = Math.round(newTemp * 10) / 10;
  return round;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
