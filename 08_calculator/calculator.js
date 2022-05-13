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

const multiply = function(num1, ...arg) {
  let total = num1;
  for (let i = 0; i < arg.length; i ++) {
    total *= arg[i];
  }
  return total;
};

const power = function() {
	
};

const factorial = function() {
	
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
