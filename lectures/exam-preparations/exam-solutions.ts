//1. Typed test data and string cleanup — 10 points

import { limitresponseTime } from "./qa-helpers.js";

const username: string = " useR_01 ";
const isLoggedIn: boolean = true;
const apiBaseUrl: string = "https://api.example.com";
const expectedHTTPStatus: number = 200;
let actualHTTPStatus: number = 200;
const responseTime: number = 123;
const retryLimit: number = 3;

console.log(`Username is: ${username} and its type is: ${typeof username}`);
console.log(
  `Is logged in: ${isLoggedIn} and its type is: ${typeof isLoggedIn}`,
);
console.log(
  `API Base URL: ${apiBaseUrl} and its type is: ${typeof apiBaseUrl}`,
);
console.log(
  `Expected HTTP Status: ${expectedHTTPStatus} and its type is: ${typeof expectedHTTPStatus}`,
);
console.log(
  `Actual HTTP Status: ${actualHTTPStatus} and its type is: ${typeof actualHTTPStatus}`,
);
console.log(
  `Response Time: ${responseTime} and its type is: ${typeof responseTime}`,
);
console.log(`Retry Limit: ${retryLimit} and its type is: ${typeof retryLimit}`);

const normalizedUsername = username.trim().toLowerCase();
console.log(
  `Normalized Username is: ${normalizedUsername} and the user logged in status is: ${isLoggedIn}`,
);

type TestOutcome = "PASS" | "FAIL" | "RETRY";

//2. Conditions and test decisions — 10 points

function validateStatus(expected: number, actual: number): TestOutcome {
  if (expected === actual) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

console.log(
  `Status validation result: ${validateStatus(expectedHTTPStatus, actualHTTPStatus)}`,
);
actualHTTPStatus = 404; // Example of changing the actual status
console.log(
  `Status validation result after update: ${validateStatus(expectedHTTPStatus, actualHTTPStatus)}`,
);

actualHTTPStatus = 200;
function apiCheck(
  status: number,
  responseTime: number,
  loggedin: boolean,
  retryLimit: number,
): TestOutcome {
  const maxResponseTime: number = 1000;
  const attempts: number = 1;

  if (!loggedin && attempts <= retryLimit) {
    return "RETRY";
  } else if (
    status === expectedHTTPStatus &&
    responseTime <= maxResponseTime &&
    loggedin &&
    attempts <= retryLimit
  ) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

console.log(
  `API check result: ${apiCheck(actualHTTPStatus, responseTime, isLoggedIn, retryLimit)}`,
);

const finalResult: string =
  apiCheck(actualHTTPStatus, responseTime, isLoggedIn, retryLimit) === "PASS"
    ? "PASS"
    : "FAIL";
console.log(`Final result: ${finalResult}`);

//3. Arrays, loops, and control flow — 10 points
const httpStatuses: number[] = [200, 404, 500, 202, 400, 505];
let counterPass: number = 0;
let counterFail: number = 0;
let counterAll: number = 0;

for (const status of httpStatuses) {
  const result = validateStatus(expectedHTTPStatus, status);
  counterAll++;
  if (result === "PASS") {
    counterPass++;
  } else {
    counterFail++;
  }
}

console.log(`Total: ${counterAll}, Pass: ${counterPass}, Fail: ${counterFail}`);

const usernames: string[] = ["Alice", "Bob", "Charlie", "Dave", "", "George"];
for (const user of usernames) {
  if (!user) {
    console.log("Invalid username");
    continue;
  } else {
    const normalizedUser = user.trim().toLowerCase();
    console.log(`Username: ${normalizedUser}`);
  }
}

for (const status of httpStatuses) {
  if (status >= 500) {
    break;
  }
  console.log(`Checking status: ${status}`);
}

const browsers: string[] = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
const environments: string[] = ["Development", "Staging", "Production"];

for (const browser of browsers) {
  for (const environment of environments) {
    if (browser === "Safari" && environment === "Production") {
      console.log(`Skipping Safari in Production environment`);
      continue;
    }
    console.log(
      `Testing on browser: ${browser} in environment: ${environment}`,
    );
  }
}

//4. Array-method test report — 10 points

interface TestResult {
  readonly id: number;
  name: string;
  httpStatus: number;
  responseTime: number;
  duration: number;
  result: "PASS" | "FAIL" | "SKIP" | "PENDING";
  retryCount?: number;
}

const loginTestResult: TestResult = {
  id: 1,
  name: "Login Test",
  httpStatus: 200,
  responseTime: 500,
  duration: 100,
  result: "PASS",
  retryCount: 0,
};

const logoutTestResult: TestResult = {
  id: 2,
  name: "Logout Test",
  httpStatus: 200,
  responseTime: 400,
  duration: 806,
  result: "FAIL",
  retryCount: 0,
};

const profileTestResult: TestResult = {
  id: 3,
  name: "Profile Test",
  httpStatus: 200,
  responseTime: 450,
  duration: 909,
  result: "SKIP",
  retryCount: 0,
};

const settingsTestResult: TestResult = {
  id: 4,
  name: "Settings Test",
  httpStatus: 200,
  responseTime: 600,
  duration: 1200,
  result: "PASS",
  retryCount: 0,
};

const dashboardTestResult: TestResult = {
  id: 5,
  name: "Dashboard Test",
  httpStatus: 200,
  responseTime: 550,
  duration: 1100,
  result: "PENDING",
  retryCount: 0,
};

const searchTestResult: TestResult = {
  id: 6,
  name: "Search Test",
  httpStatus: 200,
  responseTime: 500,
  duration: 130,
  result: "PASS",
};

const testResults: TestResult[] = [
  loginTestResult,
  logoutTestResult,
  profileTestResult,
  settingsTestResult,
  dashboardTestResult,
  searchTestResult,
];

const failedTestNames: string[] = [
  ...testResults
    .filter((test) => test.result === "FAIL")
    .map((test) => test.name),
];

console.log(`Failed test names: ${failedTestNames}`);

const totalDuration: number = testResults.reduce(
  (sum, test) => sum + test.duration,
  0,
);

const averageDuration: number = totalDuration / testResults.length;

console.log(`Total duration: ${totalDuration}`);
console.log(`Average duration: ${averageDuration}`);

const slowestTest = testResults.reduce((slowest, test) =>
  test.duration > slowest.duration ? test : slowest,
);
console.log(
  `Slowest test: ${slowestTest.name} with duration: ${slowestTest.duration}`,
);

const report = {
  totalDuration,
  averageDuration,
  slowestTest: {
    name: slowestTest.name,
    duration: slowestTest.duration,
  },
  failedTests: failedTestNames,
};
console.log(report);

//5. Typed functions and modules — 10 points

console.log(limitresponseTime(500, 1500));
console.log(limitresponseTime(2000));

//6. Objects, interfaces, classes, and JSON — 10 points

interface UserProfile {
  user: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
  age?: number;
}

const user1: UserProfile = {
  user: "Alice",
  username: "alice_fox",
  email: "alice.fox@example.com",
  role: "admin",
  isActive: true,
  age: 30,
};

const user2: UserProfile = {
  user: "Bob",
  username: "bob_smith",
  email: "bob.smith@example.com",
  role: "user",
  isActive: false,
};

const user3: UserProfile = {
  user: "Charlie",
  username: "charlie_brown",
  email: "charlie.brown@example.com",
  role: "user",
  isActive: true,
  age: 25,
};

const userProfiles: UserProfile[] = [user1, user2, user3];
const inactiveUsers = userProfiles.filter((user) => !user.isActive);
console.log(`Inactive users: ${inactiveUsers.map((user) => user.username)}`);

class User {
  role: string;
  constructor(role: "defaultUser") {
    this.role = role;
  }
  public getDescription(): string {
    return `User role: ${this.role}`;
  }
}

const userInstance = new User("defaultUser");
console.log(userInstance.getDescription());

const jsonUser = JSON.stringify(user3);
console.log("JSON User:", jsonUser);
const parsedUser = JSON.parse(jsonUser);
console.log("Parsed User:", parsedUser);

console.log("User active status is", parsedUser.isActive);

//7. Error handling and validation — 10 points

class TestDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TestDataError";
  }
}

function validateUser(user: string, username: string): string {
  if (typeof user !== "string" || !user.trim()) {
    throw new TestDataError(
      "Invalid user data: user field is required and must be a string",
    );
  }
  if (typeof username !== "string" || !username.trim()) {
    throw new TestDataError(
      "Invalid user data: username field is required and must be a string",
    );
  }
  return user;
}

try {
  console.log("Validating user:", validateUser(user3.user, user3.username));
} catch (error) {
  if (error instanceof TestDataError) {
    console.log("Validation error:", error.message);
  } else if (error instanceof Error) {
    console.log("Unexpected error:", error.message);
  } else {
    throw error;
  }
} finally {
  console.log("Validation attempt finished.");
}

const invalidJsonUser = '{"user": "Dave", "username": "dave123"';

try {
  const parsedValidUser = JSON.parse(jsonUser);
  console.log("Parsed valid JSON User:", parsedValidUser);
  const parsedInvalidUser = JSON.parse(invalidJsonUser);
  console.log("Parsed invalid JSON User:", parsedInvalidUser);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON parsing error:", error.message);
  } else {
    throw error;
  }
}

//8. Promises and asynchronous tests — 10 points

function promiseTest(test: TestResult): Promise<TestResult> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (test.result === "PASS") {
        resolve(test);
      } else {
        reject(new Error(`Test failed: ${test.name}`));
      }
    }, 1000);
  });
}

async function runPromiseTest(test: TestResult) {
  try {
    const result = await promiseTest(test);
    console.log("Promise test result:", result);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Promise test error:", error.message);
    } else {
      throw error;
    }
  } finally {
    console.log("Promise test completed.");
  }
}

// runPromiseTest(loginTestResult);
// runPromiseTest(logoutTestResult);

Promise.all([
  runPromiseTest(loginTestResult),
  runPromiseTest(logoutTestResult),
]);

//9. TypeScript types and interfaces — 10 points

interface AccountApiResponse {
  readonly id: number;
  username: string;
  email: string;
  isActive?: boolean;
}

const exampleApiResponse: AccountApiResponse = {
  id: 1,
  username: "testuser",
  email: "testuser@example.com",
};

function validateAccountApiResponse(
  response: AccountApiResponse,
): AccountApiResponse {
  if (typeof response.id !== "number") {
    throw new TestDataError("Invalid API response: id must be a number");
  }
  if (typeof response.username !== "string" || !response.username.trim()) {
    throw new TestDataError(
      "Invalid API response: username is required and must be a string",
    );
  }
  if (typeof response.email !== "string" || !response.email.trim()) {
    throw new TestDataError(
      "Invalid API response: email is required and must be a string",
    );
  }
  if (
    response.isActive !== undefined &&
    typeof response.isActive !== "boolean"
  ) {
    throw new TestDataError("Invalid API response: isActive must be a boolean");
  }
  return response;
}

console.log(
  "Validated API response:",
  validateAccountApiResponse(exampleApiResponse),
);

//10. Enums, inheritance, access modifiers, and generics — 10 points

enum TestStatus {
  PASS = "PASS",
  FAIL = "FAIL",
  SKIPPED = "SKIPPED"
}

class BaseTestCase {
  readonly id: number;
  public name: string;
  private description: string;
  protected status: TestStatus;

  constructor(id: number, name: string, description: string, status: TestStatus) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
  }

  public printSummary() {
    console.log(`ID: ${this.id}`);
    console.log(`Test Case: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Status: ${this.status}`);
  }
}

class DetailedTestCase extends BaseTestCase {
  public duration: number;

  constructor(
    id: number,
    name: string,
    description: string,
    status: TestStatus,
    duration: number
  ) {
    super(id, name, description, status);
    this.duration = duration;
  }

  public printSummary() {
    super.printSummary();
    console.log(`Duration: ${this.duration}`);
  }
}

const detailedTestCase = new DetailedTestCase(
  1,
  "Sample Test Case",
  "This is a detailed test case description",
  TestStatus.PASS,
  120
);

const failedTestCase = new DetailedTestCase(
  2,
  "Failed Test Case",
  "This test case is expected to fail",
  TestStatus.FAIL,
  90
);

detailedTestCase.printSummary();
failedTestCase.printSummary();

function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const numbers: number[] = [1, 2, 3];
const firstNumber = getFirst(numbers);
if (firstNumber !== undefined) {
  console.log(`First number: ${firstNumber}`);
} else {
  console.log("Array is empty");
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

const stringResponse: ApiResponse<string> = {
  data: "Hello, world!",
  status: 200
};

const numberResponse: ApiResponse<number> = {
  data: 42,
  status: 200
};

console.log(`String response data: ${stringResponse.data}`);
console.log(`Number response data: ${numberResponse.data}`);