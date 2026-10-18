# Extra Practice: API Test Report

Use the existing modules in `src/` to complete these exercises in a new file named `homework-extra.js`. Do not change the functions in `src/`.

## Tasks

1. Import the functions you need from `src/validators.js`, `src/testData.js`, and `src/testUtils.js` using named imports.
2. Create an array of at least six test result objects. Give each one a `name`, a `status` of `"PASS"` or `"FAIL"`, and a numeric `duration` in milliseconds. Include at least two passing tests and two failing tests.
3. Use `getPassedTests` and `getFailedTests` to get the passing and failing results. Log the names of the tests in each group and the number of tests in each group.
4. Use `calculateAverageDuration` to log the average duration of all tests and the average duration of the passing tests. Also call it with an empty array and confirm it returns `0`.
5. Use `createSummary` and `printSummary` to display a report for the full test array.
6. Use `createUser` to create a user with the default role and another user with a role of your choice. Log both objects.
7. Check usernames with `isValidUsername`: try a valid username, a username shorter than three characters, and an empty string. Log each result.
8. Try `isSuccessfulStatus` with status codes `199`, `200`, `299`, and `300`. Log the results and note which codes count as successful.
9. Try `isExpectedStatus` once with only an actual status code and once with both an actual and expected status code. Log both results.
10. Try `isWithinResponseTime` with a response below, equal to, and above the default limit. Then try it again with a custom limit. Log the results.
11. Create at least three API response objects with a status code and response time. For each response, combine `isSuccessfulStatus` and `isWithinResponseTime` with `&&` to decide whether the overall result is `"PASS"` or `"FAIL"`. Log each result.

