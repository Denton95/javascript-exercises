const add = function(a, b) {
	return (a + b);
};

const subtract = function(a , b) {
	return (a - b);
};

const sum = function(array) {
	return array.reduce((total , current) => total + current , 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total*current );
};

const power = function(number , power) {
	return Math.pow(number , power)
};

const factorial = function(n) {
  let array = [];
  if (n > 0){
	  for (let i=0 ; i < n ; i++){
      array.push(i+1);
   }
  return multiply(array);
  }
  else {
    return 1
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
