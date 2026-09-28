// Run from the repository root: node lectures/01-development-env-basics/practice/02-build-request-details.js
const method = "GET";
const resource = "/users/42";
const baseUrl = "https://demo.example.test";
const requestUrl = baseUrl + resource;
const caseName = `${method} request for ${resource}`;

console.log("Request:", caseName);
console.log("URL:", requestUrl);
console.log(
  "Practice: change the method and resource, then build a second case name.",
);
