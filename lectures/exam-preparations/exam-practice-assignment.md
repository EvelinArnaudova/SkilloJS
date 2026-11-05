# Exam Practice: TypeScript QA Test Runner

**Scope:** Lectures 1-10  
**Total:** 100 points  
**Language:** TypeScript for every task

Build a small QA test runner for a fictional account API. The tasks build on
each other, so reuse your types and data where practical. Create your solution
in the Lecture 10 `homework` folder:

```text
homework/
  exam-practice-solved.ts
  qa-helpers.ts
```

Do not change existing homework solutions or shared project configuration.

## Tasks

### 1. Typed test data and string cleanup — 10 points

1. Declare values for a username, user ID, logged-in state, API base URL,
   expected and actual HTTP status, response time, and retry limit. Add
   explicit TypeScript types to some declarations and let TypeScript infer
   others.
2. Log each value and its type with `typeof`.
3. Normalize a username containing extra spaces and mixed casing using
   `trim()` and `toLowerCase()`.
4. Use a template literal to report the normalized username and whether the
   user is logged in.
5. Define a `TestOutcome` string-literal union with `"PASS"`, `"FAIL"`, and
   `"SKIP"` values for test outcomes.

### 2. Conditions and test decisions — 10 points

1. Write a typed `validateStatus(expected, actual)` function that returns
   whether the codes match. Try both a passing and a failing pair.
2. Decide whether an API check is `PASS`, `RETRY`, or `FAIL` using status,
   response-time, login, and retry-limit checks. Use an `if` / `else if` /
   `else` chain.
3. Express a final two-way pass/fail check with a ternary operator.
4. Include the relevant values in the messages you print.

### 3. Arrays, loops, and control flow — 10 points

1. Create a typed array of at least six HTTP status codes, including 2xx,
   4xx, and 5xx values.
2. Use a loop to report each code as `PASS` or `FAIL`, and count total,
   passed, and failed checks.
3. Create an array of usernames that includes an empty entry; use `continue`
   to skip empty usernames.
4. Use nested loops to report browser/environment combinations and skip one
   specified combination. Stop processing status codes with `break` if a
   critical 5xx response is encountered.

### 4. Array-method test report — 10 points

Define a `TestResult` interface with a `readonly` ID, name, HTTP status,
response time, duration, `TestOutcome`, and an optional retry count. Create at
least six typed test-result objects. Include passing, failing, skipped, and
slow results. Then:

1. Use `filter()` and `map()` to produce the failed test names.
2. Use `find()` to locate the first failure and handle the possibility that
   there is no match.
3. Use `reduce()` to calculate total and average duration; handle an empty
   array without dividing by zero.
4. Sort a copy of the results to find the slowest test without changing the
   original array.
5. Use destructuring and print a report with totals, average duration,
   slowest test, and failed names.

### 5. Typed functions and modules — 10 points

In `qa-helpers.ts`, export and type reusable helpers for successful HTTP
statuses, matching an expected status, response-time limits, username
validation, and average duration. In `exam-practice-solved.ts`, import and
use them with named imports (use `./qa-helpers.js` as the module specifier).

- Use a default parameter for a response-time limit and show a call that
  supplies a custom limit.
- Return `0` for the average of an empty duration array.
- Use a guard clause for invalid usernames.
- Include a helper with a rest parameter and call it with different numbers
  of arguments.
- Keep calculation helpers free of logging side effects.

### 6. Objects, interfaces, classes, and JSON — 10 points

1. Define a `UserProfile` interface with username, email, role, and active
   state. Add an optional property and create at least three valid users,
   including one inactive user.
2. Use `filter()` to select inactive users.
3. Create a basic `User` class with a constructor, a default role, and a
   `getDescription()` method. Instantiate it at least twice.
4. Serialize a user with `JSON.stringify()` and parse it with `JSON.parse()`.
   Log selected properties. Remember that parsing JSON does not validate its
   shape at runtime.

### 7. Error handling and validation — 10 points

1. Create a `TestDataError` class that extends `Error`.
2. Write a typed `validateUser` function that rejects a missing user or
   username with `TestDataError` and returns a valid user.
3. Demonstrate valid and invalid calls with `try` / `catch` / `finally`.
   Identify `TestDataError` with `instanceof`, handle other `Error` values
   separately, and rethrow unexpected errors.
4. Parse one valid and one invalid JSON string inside `try` / `catch`, and
   report a useful error message for invalid JSON.

### 8. Promises and asynchronous tests — 10 points

1. Write a function returning `Promise<TestResult>` that resolves after a
   short delay, and another that rejects with an `Error`.
2. Use `async` / `await` to run a single test and report its result. Handle
   rejection with `try` / `catch` and log completion in `finally`.
3. Run two independent test promises together with `Promise.all()` and
   report both results.
4. Write an asynchronous validator that throws when a resolved result is not
   passing. Demonstrate both passing and failing results and handle each
   error.

### 9. TypeScript types and interfaces — 10 points

1. Define an `AccountApiResponse` interface whose body is a typed object.
2. Write functions with explicit parameter and return types that consume
   `AccountApiResponse` and `TestResult`.
3. Create valid examples, read the `readonly` ID, and include intentional
   type-error examples (such as an invalid object or reassignment of the ID)
   only in comments so the solution still typechecks.

### 10. Enums, inheritance, access modifiers, and generics — 10 points

1. Define a string enum for test status with passed, failed, and skipped
   values.
2. Create a `BaseTestCase` class with a `readonly` ID, public name, private
   description, and protected status. Add a method that prints its summary.
3. Create a `DetailedTestCase` subclass that adds a duration and prints the
   inherited summary plus the duration. Instantiate and report at least one
   passing and one failing result.
4. Write `getFirst<T>(items: T[]): T | undefined` and call it with a typed
   array. Handle an empty array safely.
5. Define a generic `ApiResponse<T>`, create responses containing two
   different data types, and access their typed data.

## Completion checklist

- Run the solution with:

  ```powershell
  npx tsx lectures/10-typescript-classes-generics-and-enums/homework/exam-practice-solved.ts
  ```

- Run `npm run typecheck` and fix type errors; `tsx` execution alone does not
  perform a full TypeScript typecheck.
- Format the TypeScript files with Prettier and check them with ESLint.
- Keep the work in the existing project and do not replace shared
  configuration.
