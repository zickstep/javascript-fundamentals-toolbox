/**
 * @description Takes a string and returns the characters in reverse order.
 * @author Javier Ibanez
 * @date 2026-06-27
 * @param {string} inputString - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverseString(inputString) {
  // Use built-in methods: split into array, reverse array, join back to string
  return inputString.split("").reverse().join("");
}

//Example usage:
const original = "Hello world";
console.log(reverseString(original)); // "dlrow olleH"

reverseString("Javier Ibanez"); // "zenabI reivaJ"
