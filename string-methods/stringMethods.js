// --- String Methods Sandbox ---

const devName = "  Javier Ibanez  ";

// 1. .trim() - Removes extra whitespace from start/end
const cleanName = devName.trim();
console.log(`Trimmed: "${cleanName}"`);

// 2. .toUpperCase() / .toLowerCase()
console.log(cleanName.toUpperCase()); // "JAVIER IBANEZ"

// 3. .includes() - Does the string contain this text?
console.log(cleanName.includes("Ibanez")); // true

// 4. .split() - Turns string into array
const nameArray = cleanName.split(" ");
console.log(nameArray); // ["Javier", "Ibanez"]

// 5. .slice() - Extract part of a string
// Grabs the first 3 letters
console.log(cleanName.slice(0, 3)); // "Jav"
