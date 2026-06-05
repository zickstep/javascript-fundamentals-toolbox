// CHALLENGE: Create a function that takes a word and reverses it.
// Example: "hello" becomes "olleh"

const reverseWord = (word) => {
    // 1. .split("") breaks the string into an array of letters
    // 2. .reverse() flips that array backwards
    // 3. .join("") glues the letters back into a string
    return word.split("").reverse().join("");
};

// Test log to verify
console.log(reverseWord("zickstep")); // Output should be: petskciz