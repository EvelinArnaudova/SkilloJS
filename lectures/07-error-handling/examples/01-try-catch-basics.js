// Run from the repository root: node lectures/07-error-handling/examples/01-try-catch-basics.js

// try runs code that might throw; catch handles the error if one occurs.
try {
  const data = JSON.parse("invalid JSON");
  console.log(data);
} catch (error) {
  console.log("Failed to parse JSON");
  console.log(error.message);
}

// Error objects expose useful debugging information.
try {
  JSON.parse("{ invalid }");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// try...catch can wrap a QA validation and turn a bad condition into a
// clear PASS/FAIL message instead of letting the script crash.
const response = {
  status: 500,
  body: null,
};

try {
  if (response.status !== 200) {
    throw new Error(`Unexpected status: ${response.status}`);
  }

  console.log("PASS: Response validated");
} catch (error) {
  console.log("FAIL:", error.message);
}
