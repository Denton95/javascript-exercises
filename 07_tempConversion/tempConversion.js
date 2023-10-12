const convertToCelsius = function(fahrenheit) {
    let text = ((fahrenheit - 32) * (5/9)).toFixed(1);
    return Number(text)
};

const convertToFahrenheit = function(celcius) {
  let text = (celcius * (9/5) + 32).toFixed(1);
  return Number(text)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
