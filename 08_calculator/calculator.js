const add = function(num1, num2) {
  let total = num1 + num2;
  return total;	
};

const subtract = function(num1, num2) {
  let total = num1 - num2;
  return total;	
};

const sum = function([...arg]) {
	let total = 0;
  if (arg == undefined) {
    return total;
  } else {
    for (let i = 0; i < arg.length; i++) {
      total += arg[i];
    }
  }
  return total;
};

const multiply = function([...arg]) {
  let total = 1;
  for (let i = 0; i < arg.length; i++) {
    total *= arg[i];
  }
  return total;
};

const power = function(num, pow) {
  let total;
  total = num ** pow;
  return total;	
};

const factorial = function(num) {
	let total = 1;

  if (num === 1 || num === 0) {
    return total;
  } else {
    for (let i = num; i >= 1; i--) {
      total = total * i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
