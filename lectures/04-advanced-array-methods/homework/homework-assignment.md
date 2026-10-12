# Homework 04: Test Report Builder

Complete the assignment in `homework-solved.js`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Create an array `tests` of objects, each with `name`, `status` (`"PASS"` or `"FAIL"`), and `duration` (a number in ms). Include at least four tests with a mix of passing and failing results.
2. Use `filter()` to build a `failedTests` array containing only the failed tests.
3. Use `map()` on `failedTests` to build a `failedTestNames` array containing just their names.
4. Use `reduce()` to calculate the `totalDuration` of all tests, then calculate the `averageDuration`.
5. Use `sort()` on a **copy** of `tests` (for example with `[...tests]`) to order them by `duration`, and read off the slowest test.
6. Use `find()` to locate the first failed test and log it separately.
7. Use array destructuring to pull `name`, `status`, and `duration` out of one single test object into three variables, then log them.
8. Build a `testReport` object containing: total tests, passed count, failed count, average duration, the slowest test's name, and `failedTestNames`. Log the final report.
9. Run the file with `npm run test:lecture-04` (or `node lectures/04-advanced-array-methods/homework/homework-solved.js` if the script is not yet available). Fix any errors and format the file with Prettier. Check it with ESLint.
10. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Chain `filter()` and `map()` in a single statement (no intermediate variable) to produce `failedTestNames` directly, and compare it with your step-by-step version from task 3.
