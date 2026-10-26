// Run from the repository root: node lectures/08-asynchronous-javascript/practice/02-async-await-practice.js
function loadStatusCode() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(200), 300);
  });
}

async function checkStatus() {
  const statusCode = await loadStatusCode();

  console.log("Status code:", statusCode);
  console.log("Is successful:", statusCode >= 200 && statusCode < 300);
}

checkStatus();

console.log(
  "Practice: wrap the await call in try...catch and finally, then log a message when checkStatus finishes.",
);
