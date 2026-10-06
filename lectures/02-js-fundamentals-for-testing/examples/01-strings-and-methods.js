// Run from the repository root: node lectures/02-js-fundamentals-for-testing/examples/01-strings-and-methods.js
const firstName = "John";
const lastName = "Smith";
const fullName = firstName + " " + lastName;

console.log(fullName);
console.log("Length:", firstName.length);
console.log("Uppercase:", firstName.toUpperCase());
console.log("Lowercase:", firstName.toLowerCase());

// Template literals make dynamic messages easier to read than string concatenation.
const username = "john.smith";
const statusCode = 200;
console.log(`User ${username} received status ${statusCode}`);

// Common string methods used to clean and check test data.
const email = "  TestUser@Example.COM  ";

console.log("Contains '@':", email.includes("@"));
// Extra spaces mean these checks are false until the string is trimmed.
console.log("Starts with 'Test' (untrimmed):", email.startsWith("Test"));
console.log("Ends with '.COM' (untrimmed):", email.endsWith(".COM"));

const trimmedEmail = email.trim().toLowerCase();
console.log("Trimmed and lowercase:", trimmedEmail);
console.log("Starts with 'test' (trimmed):", trimmedEmail.startsWith("test"));
console.log("Ends with '.com' (trimmed):", trimmedEmail.endsWith(".com"));
