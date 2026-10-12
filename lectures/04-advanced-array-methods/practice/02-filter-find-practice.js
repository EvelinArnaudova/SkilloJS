// Run from the repository root: node lectures/04-advanced-array-methods/practice/02-filter-find-practice.js
const statusCodes = [200, 301, 404, 500, 204, 403];

// filter() keeps every element that passes the check; find() stops at the first one.
const errorCodes = statusCodes.filter((code) => code >= 400);
const firstErrorCode = statusCodes.find((code) => code >= 400);

console.log("Error codes:", errorCodes);
console.log("First error code:", firstErrorCode);

console.log(
  "Practice: use filter() to get only the successful (2xx) status codes.",
);
