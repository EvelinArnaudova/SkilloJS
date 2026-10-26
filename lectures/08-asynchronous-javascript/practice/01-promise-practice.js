// Run from the repository root: node lectures/08-asynchronous-javascript/practice/01-promise-practice.js
function loadConfig() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ browser: "Chrome", retries: 2 }), 300);
  });
}

loadConfig()
  .then((config) => {
    console.log("Config loaded:", config);
  })
  .catch((error) => {
    console.log("Failed to load config:", error.message);
  });

console.log(
  "Practice: add a .finally() after .catch() that logs 'Config load attempt finished'.",
);
