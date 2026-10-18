// Named exports make these functions available to other modules via `import`.
function isSuccessfulStatus(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

function isExpectedStatus(actual, expected = 200) {
  return actual === expected;
}

export { isSuccessfulStatus, isExpectedStatus };