// Run from the repository root: node lectures/07-error-handling/practice/03-finally-practice.js
function checkResponseStatus(statusCode) {
  console.log("Starting status check");

  try {
    if (statusCode !== 200) {
      throw new Error(`Unexpected status: ${statusCode}`);
    }

    console.log("PASS: status is 200");
  } catch (error) {
    console.log("FAIL:", error.message);
  } finally {
    console.log("Status check finished");
  }
}

checkResponseStatus(200);
checkResponseStatus(500);

console.log(
  "Practice: call checkResponseStatus with 404 and confirm finally still runs.",
);
