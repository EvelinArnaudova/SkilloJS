export function getPassedTests(tests) {
  return tests.filter((test) => test.status === "PASS");
}

export function getFailedTests(tests) {
  return tests.filter((test) => test.status === "FAIL");
}

export function calculateAverageDuration(tests) {
  if (tests.length === 0) {
    return 0;
  }

  const totalDuration = tests.reduce((sum, test) => sum + test.duration, 0);

  return totalDuration / tests.length;
}

export function createSummary(tests) {
  return {
    total: tests.length,
    passed: getPassedTests(tests).length,
    failed: getFailedTests(tests).length,
    averageDuration: calculateAverageDuration(tests),
  };
}

export function printSummary(summary) {
  console.log(`Total tests: ${summary.total}`);
  console.log(`Passed: ${summary.passed}`);
  console.log(`Failed: ${summary.failed}`);
  console.log(`Average duration: ${summary.averageDuration}ms`);
}
