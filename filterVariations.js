/**
 * @description Takes an array of mixed data and returns a new array containing ONLY the strings.
 * @author Javier Ibanez
 * @returns {Array} An array of strings
 */
function filterStrings(l) {
  const listStrings = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "string") {
      listStrings.push(l[i]);
    }
  }

  return listStrings;
}

/**
 * @description Takes an array of mixed data and returns a new array containing ONLY the numbers.
 * @author Javier Ibanez
 * @returns {Array} An array of numbers
 */
function filterNumbers(l) {
  const listNumbers = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      listNumbers.push(l[i]);
    }
  }

  return listNumbers;
}

/**
 * @description Sorts an array of mixed data into two separate arrays based on data type (strings and numbers).
 * @author Javier Ibanez
 * @returns {Array} A master array containing two sub-arrays: [ [strings], [numbers] ]
 */
function filterBoth(l) {
  const listStrings = [];
  const listNumbers = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "string") {
      listStrings.push(l[i]);
    } else if (typeof l[i] === "number") {
      listNumbers.push(l[i]);
    }
  }

  return [listStrings, listNumbers];
}

// --- Testing All Three ---
console.log("Only Strings:", filterStrings([1, 2, 3, "a", "b", "c"]));
console.log("Only Numbers:", filterNumbers([1, 2, 3, "a", "b", "c"]));
console.log("Both Arrays:", filterBoth([1, 2, 3, "a", "b", "c"]));
