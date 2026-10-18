// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/practice/03-early-return-practice.js
function validatePassword(password) {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password is too short";
  }

  return "Password is valid";
}

console.log(validatePassword(""));
console.log(validatePassword("abc123"));
console.log(validatePassword("abcd1234"));

console.log(
  "Practice: add a guard clause that rejects a password equal to the username.",
);
