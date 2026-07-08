/**
 * @description Demonstrates how to catch a TypeError using a try-catch block.
 * @author Javier Ibanez
 */
function demonstrateTypeError() {
  try {
    const pointsScored = 28;

    // Attempting to use a string method (.toUpperCase) on a number variable
    console.log("Attempting to uppercase the score...");
    const upperCasePoints = pointsScored.toUpperCase();

    // This line will never run because the error throws on the line above
    console.log(upperCasePoints);
  } catch (error) {
    // This block catches the error and logs it safely
    console.log("Whoops! We caught an error.");
    console.log(`Error Name: ${error.name}`);
    console.log(`Error Message: ${error.message}`);
  }
}

demonstrateTypeError();
