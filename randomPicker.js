/**
 * @description Selects a random stat category from an array using the Math object.
 * @author Javier Ibanez
 * @returns {string} A randomly selected stat category.
 */
function getRandomStatProp() {
  const props = ["Points", "Rebounds", "Assists", "Steals", "Blocks"];

  // Math.random() generates a decimal between 0 and 0.999...
  // Multiplying by array length (5) gives a decimal between 0 and 4.999...
  // Math.floor() rounds it down to a whole number: 0, 1, 2, 3, or 4.
  const randomIndex = Math.floor(Math.random() * props.length);

  return props[randomIndex];
}

console.log(
  `Tonight's randomly selected prop to watch: ${getRandomStatProp()}`,
);
