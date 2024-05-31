const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function(a, b) {
  let res = a;
	while (b != 1) {
    res = res * a;
    b--;
  }
  return res;
};

const factorial = function(num) {
	let res = 1;
  
  for (let i = 1; i <= num; i++) {
    res *= i;
  }

  return res;
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
