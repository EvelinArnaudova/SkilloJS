// Run from the repository root: node lectures/07-error-handling/practice/02-throw-practice.js
function validatePassword(password) {
  if (!password) {
    throw new Error("Password is required");
  }

  if (password.length < 8) {
    throw new Error("Password must contain at least 8 characters");
  }

  return true;
}

try {
  console.log(validatePassword("abcd1234"));
  console.log(validatePassword("short"));
} catch (error) {
  console.log("Validation failed:", error.message);
}

console.log(
  "Practice: add a check that throws when the password equals 'password', then test it.",
);
