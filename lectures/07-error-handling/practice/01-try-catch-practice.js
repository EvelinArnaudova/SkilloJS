// Run from the repository root: node lectures/07-error-handling/practice/01-try-catch-practice.js
function parseStatusCode(jsonText) {
  try {
    const payload = JSON.parse(jsonText);
    return payload.statusCode;
  } catch (error) {
    console.log("Could not parse response:", error.message);
    return null;
  }
}

console.log(parseStatusCode('{"statusCode": 200}'));
console.log(parseStatusCode("not valid json"));

console.log(
  "Practice: call parseStatusCode with a JSON object that has no statusCode property, and log what is returned.",
);
