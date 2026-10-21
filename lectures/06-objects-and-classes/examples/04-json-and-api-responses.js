// Run from the repository root: node lectures/06-objects-and-classes/examples/04-json-and-api-responses.js

const user = {
  username: "alice",
  role: "admin",
};

// JSON.stringify() converts a JavaScript value into JSON text (a string).
// Useful for logging test data or inspecting a request payload.
const json = JSON.stringify(user);

console.log(json);
console.log(typeof json);

// JSON.parse() converts valid JSON text back into a JavaScript value.
// This is how an API response body is usually turned into a usable object.
const jsonText = '{"username":"alice","role":"admin"}';
const parsedUser = JSON.parse(jsonText);

console.log(parsedUser.username);
console.log(parsedUser.role);

// Example API response, validated with simple comparisons (an early form
// of the assertions used in real automation frameworks).
const response = {
  status: 200,
  body: {
    id: 101,
    username: "alice",
    active: true,
  },
};

console.log(response.status === 200);
console.log(response.body.username === "alice");
console.log(response.body.active === true);
