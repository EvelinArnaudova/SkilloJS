// Run from the repository root: node lectures/07-error-handling/examples/02-throw-and-validation.js

// throw reports a condition that should be treated as an error,
// stopping normal execution at that point.
function validateUsername(username) {
  if (!username) {
    throw new Error("Username is required");
  }

  if (username.length < 3) {
    throw new Error("Username must contain at least 3 characters");
  }

  return true;
}

console.log(validateUsername("alice"));

try {
  validateUsername("");
} catch (error) {
  console.log("Validation failed:", error.message);
}

// Returning a value is better when invalid input is an expected outcome
// the caller can handle normally (no try...catch needed to read a boolean).
function isValidUsername(username) {
  return Boolean(username && username.length >= 3);
}

console.log(isValidUsername("ab"));
console.log(isValidUsername("alice"));
