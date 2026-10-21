// Run from the repository root: node lectures/07-error-handling/examples/03-custom-errors-and-finally.js

// A custom error class (extends the built-in Error) lets catch blocks
// tell different failure types apart with `instanceof`.
class TestDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "TestDataError";
  }
}

function getTestUser(user) {
  if (!user || !user.username) {
    throw new TestDataError("Test user must have a username");
  }

  return user;
}

try {
  getTestUser({});
} catch (error) {
  if (error instanceof TestDataError) {
    console.log("Invalid test data:", error.message);
  } else {
    throw error;
  }
}

// finally always runs after try/catch, whether an error was thrown or not.
// It is the right place for cleanup that must happen either way.
function runTest() {
  console.log("Setting up test resources");

  try {
    console.log("Executing test");
    throw new Error("Test failed");
  } catch (error) {
    console.log("Failure:", error.message);
  } finally {
    console.log("Cleaning up test resources");
  }
}

runTest();
