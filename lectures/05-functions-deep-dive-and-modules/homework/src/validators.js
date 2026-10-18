export function isSuccessfulStatus(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

export function isExpectedStatus(actual, expected = 200) {
  return actual === expected;
}

export function isValidUsername(username) {
  if (!username) {
    return false;
  }

  if (username.length < 3) {
    return false;
  }

  return true;
}

export function isWithinResponseTime(responseTime, maxResponseTime = 1000) {
  return responseTime < maxResponseTime;
}
