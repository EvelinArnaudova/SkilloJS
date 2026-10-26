// Run from the repository root: node lectures/08-asynchronous-javascript/examples/02-promises-then-catch-finally.js

// A Promise represents the eventual result of an asynchronous operation.
// It starts pending, then settles as either fulfilled (resolve) or rejected (reject).
function loadTestData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["alice", "bob", "charlie"]);
    }, 500);
  });
}

// .then() runs a callback when the Promise fulfills.
loadTestData().then((users) => {
  console.log("Users loaded:", users);
});

function loadTestDataThatFails() {
  return new Promise((resolve, reject) => {
    reject(new Error("Unable to load test data"));
  });
}

// .catch() runs a callback when the Promise rejects, instead of .then().
loadTestDataThatFails()
  .then((data) => {
    console.log("Data loaded:", data);
  })
  .catch((error) => {
    console.log("Test setup failed:", error.message);
  });

function prepareTest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ready"), 500);
  });
}

// .finally() always runs once the Promise settles, fulfilled or rejected.
prepareTest()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    console.log("Preparation finished");
  });
