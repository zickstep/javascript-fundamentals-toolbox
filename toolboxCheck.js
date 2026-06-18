// Regex Sandbox - Practice from Zack's Bootcamp
const string1 = 'zickOne writes code';
const string2 = 'zickOne is a Dev';

// 1. Simple Search
const searchRegex = /zickOne/;
console.log("Simple Search:", searchRegex.exec(string1));

// 2. OR Logic
const orRegex = /(code|zickOne)/;
console.log("OR Logic:", orRegex.test(string2));

// 3. Character Classes and Quantifiers
// Looking for exactly 4 lowercase letters in a row
const quantifierRegex = /[a-z]{4}/;
console.log("Quantifier Match:", quantifierRegex.exec(string2));

// 4. Anchor Match (Starts with T?)
const anchorRegex = /^T/;
console.log("Starts with T?:", anchorRegex.test(string1));