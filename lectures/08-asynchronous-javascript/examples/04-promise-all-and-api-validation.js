// Run from the repository root: node lectures/08-asynchronous-javascript/examples/04-promise-all-and-api-validation.js

function loadUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["alice", "bob"]), 500);
  });
}

function loadProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["mouse", "keyboard"]), 500);
  });
}

// Promise.all() starts every operation at the same time and waits for all
// of them to fulfill (or rejects immediately if any one of them rejects).
// Use it only when the operations are independent of each other.
async function runTestsInParallel() {
  const [users, products] = await Promise.all([loadUsers(), loadProducts()]);

  console.log("Users:", users);
  console.log("Products:", products);
}

runTestsInParallel();

function fetchTestResponse() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        body: { username: "alice" },
      });
    }, 500);
  });
}

// A realistic QA pattern: await the response, then validate it and throw
// a clear error for whichever expectation fails.
async function validateApiResponse() {
  const response = await fetchTestResponse();

  if (response.status !== 200) {
    throw new Error(`Unexpected status: ${response.status}`);
  }

  if (response.body.username !== "alice") {
    throw new Error("Unexpected username");
  }

  console.log("API TEST: PASS");
}

validateApiResponse().catch((error) => {
  console.log("API TEST: FAIL —", error.message);
});
