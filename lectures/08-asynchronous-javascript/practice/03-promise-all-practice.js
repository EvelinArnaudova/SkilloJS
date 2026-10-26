// Run from the repository root: node lectures/08-asynchronous-javascript/practice/03-promise-all-practice.js
function loadBrowsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Chrome", "Firefox"]), 300);
  });
}

function loadEnvironments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["QA", "Staging"]), 300);
  });
}

async function loadTestMatrix() {
  const [browsers, environments] = await Promise.all([
    loadBrowsers(),
    loadEnvironments(),
  ]);

  console.log("Browsers:", browsers);
  console.log("Environments:", environments);
}

loadTestMatrix();

console.log(
  "Practice: add a third independent Promise (for example loadTestNames()) to the Promise.all() array.",
);
