# Homework 08: Asynchronous Test Runner

Complete the assignment in `homework-solved.js`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Write a function `getTestResult()` that returns a Promise which resolves after about one second with an object containing `name`, `status` (`"PASS"` or `"FAIL"`), and `duration` (a number in ms).
2. Write an `async` function `runSingleTest()` that:
   - Uses `await` to get the result from `getTestResult()`.
   - Logs the test `name` and `status`.
   - Checks whether `status === "PASS"` and logs the outcome.
   - Wraps the `await` call in `try...catch` to handle a rejected Promise.
   - Uses `finally` to log a completion message (for example `"Test run finished"`).
3. Call `runSingleTest()` and confirm the output appears in the expected order (logs before the Promise settles, then the result).
4. Write a second function `getFailingTestResult()` that returns a Promise which rejects after a short delay with an `Error` (for example `"Could not reach test environment"`). Call it from a function similar to `runSingleTest()` and confirm the `catch` block logs the failure message.
5. Create two independent functions, each returning a Promise that resolves after a delay with a different test result object (reuse or adapt `getTestResult()`).
6. Write an `async` function `runTestsInParallel()` that uses `Promise.all()` to await both functions from Task 5 at the same time, then logs both results.
7. Run the file with `npm run test:lecture-08` (or `node lectures/08-asynchronous-javascript/homework/homework-solved.js` if the script is not yet available). Fix any errors and format the file with Prettier. Check it with ESLint.
8. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Write an `async` function `validateTestResult(testResultPromise)` that awaits the given Promise and throws an `Error` if `status` is not `"PASS"`. Call it once with a passing test result and once with a failing one, each wrapped in its own `try...catch`, and log whether the validation passed or failed.
