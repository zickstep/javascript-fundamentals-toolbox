/**
 * @description Converts a temperature from Celsius to Fahrenheit.
 * @author Javier Ibanez
 * @date 2026-06-29
 * @param {number} celsius - The temperature in degrees Celsius.
 * @returns {number} - The temperature in degrees Fahrenheit.
 */
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Example usage:
const tempCelsius = 25;
console.log(`${tempCelsius}°C is ${convertCelsiusToFahrenheit(tempCelsius)}°F`);

/**
 * @description Converts a temperature from Fahrenheit to Celsius.
 * @author Javier Ibanez
 * @date 2026-06-29
 * @param {number} fahrenheit - The temperature in degrees Fahrenheit.
 * @returns {number} - The temperature in degrees Celsius.
 */
function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
