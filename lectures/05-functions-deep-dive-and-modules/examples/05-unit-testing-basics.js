// Run from the repository root: node lectures/05-functions-deep-dive-and-modules/examples/05-unit-testing-basics.js
// Uses Node's built-in test runner and assert module, no extra packages required.

import { test } from "node:test";
import assert from "node:assert/strict";

// --- Functionality under test ---

function isSuccessfulStatus(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

function createTestResult(name, status) {
  return { name, status };
}

// --- Unit tests ---

test("isSuccessfulStatus returns true for 200", () => {
  assert.equal(isSuccessfulStatus(200), true);
});

test("isSuccessfulStatus returns false for 404", () => {
  assert.equal(isSuccessfulStatus(404), false);
});

test("calculateTotal multiplies price by quantity", () => {
  assert.equal(calculateTotal(10, 3), 30);
});

test("createTestResult returns an object with name and status", () => {
  assert.deepEqual(createTestResult("Login", "PASS"), {
    name: "Login",
    status: "PASS",
  });
});
