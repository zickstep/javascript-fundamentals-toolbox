/**
 * @description Takes an array of numbers and strings and returns a new array with only the numbers.
 * @author Javier Ibanez
 */
function filter_list(l) {
  // 1. Create a new empty array to hold our final numbers
  const filteredArray = [];

  // 2. Loop through every item in the provided list
  for (let i = 0; i < l.length; i++) {
    // 3. Check if the current item's data type is strictly a 'number'
    if (typeof l[i] === "number") {
      // 4. If it is a number, push it into our new array
      filteredArray.push(l[i]);
    }
  }

  // 5. Return the final array with the strings filtered out
  return filteredArray;
}

// --- Testing the function ---
console.log("Test 1:", filter_list([1, 2, "a", "b"]));
// Expected: [1, 2]

console.log("Test 2:", filter_list([1, "a", "b", 0, 15]));
// Expected: [1, 0, 15]

console.log("Test 3:", filter_list([1, 2, "aasf", "1", "123", 123]));
// Expected: [1, 2, 123]
