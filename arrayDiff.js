/**
 * @description Removes all values from list 'a' which are present in list 'b'. (Manual Loop Method)
 * @author Javier Ibanez
 * @param {Array} a - The primary array to be filtered.
 * @param {Array} b - The array containing values to remove.
 * @returns {Array} A new array with the filtered values.
 */
function arrayDiffManual(a, b) {
  const filteredNum = [];

  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      filteredNum.push(a[i]);
    }
  }

  return filteredNum;
}

/* 
 =========================================================================
 SYNTAX BREAKDOWN: How the Modern Method Replaces the Manual Loop
 =========================================================================
 * a.filter(...)  -> Replaces the empty bucket AND the for loop. It automatically 
                     creates a new array, loops through 'a', and only keeps the 
                     items that pass the test.
 * x              -> Replaces 'a[i]'. It is just a temporary placeholder name 
                     for "the current item we are looking at."
 * =>             -> The "arrow function". It basically means "pass the current 
                     item into this rule."
 * !b.includes(x) -> The exact same logic used in the manual loop's if-statement.
 =========================================================================
*/

/**
 * @description Removes all values from list 'a' which are present in list 'b'. (Modern Filter Method)
 * @author Javier Ibanez
 * @param {Array} a - The primary array to be filtered.
 * @param {Array} b - The array containing values to remove.
 * @returns {Array} A new array with the filtered values.
 */
function arrayDiffModern(a, b) {
  return a.filter((x) => !b.includes(x));
}

// --- Testing Both Methods ---
console.log("Manual:", arrayDiffManual([1, 2, 2, 3], [2]));
console.log("Modern:", arrayDiffModern([1, 2, 2, 3], [2]));
