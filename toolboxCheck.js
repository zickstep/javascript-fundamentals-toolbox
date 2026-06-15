// Zack's Regular Expression Example for Email Validation
const emailValidatorRegex = new RegExp('^.+@.+\\..+$');

const myEmail = "test@example.com";
const badEmail = "wrong-email-format";

console.log("Testing good email:", emailValidatorRegex.test(myEmail)); // Should be true
console.log("Testing bad email:", emailValidatorRegex.test(badEmail)); // Should be false
