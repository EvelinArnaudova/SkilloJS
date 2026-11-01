type TestStatus = "PASS" | "FAIL" | "SKIP";

interface TestResult {
  readonly id: number;
  name: string;
  status: TestStatus;
  duration: number;
  retryCount?: number;
}

function printTestResult(result: TestResult): void {
  console.log(`Test name is ${result.name}`);
  console.log(`Test status is ${result.status}`);
  console.log(`Test duration is ${result.duration}`);
}

const loginTest: TestResult = {
  id: 1221,
  name: "Log in",
  status: "PASS",
  duration: 104,
};

//loginTest.id = 4564; //error TS2540: Cannot assign to 'id' because it is a read-only property. 24 loginTest.id = 4564;

const registrationTest: TestResult = {
  id: 1222,
  name: "Registration",
  status: "FAIL",
  duration: 509,
  retryCount: 2,
};
const signUpNewsletter: TestResult = {
  id: 1223,
  name: "Newsletter Sign Up",
  status: "SKIP",
  duration: 0,
};

printTestResult(loginTest);
printTestResult(registrationTest);
printTestResult(signUpNewsletter);

function isSuccessfulStatus(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 300;
}

interface ApiResponse {
  status: number;
  body: {
    username: string;
    isActive: boolean;
  };
}

function printApiResponse(response: ApiResponse): void {
  console.log(`API response status is ${response.status}`);
  console.log(`Username is ${response.body.username}`);
  console.log(`User active status is ${response.body.isActive}`);
}

const exampleApiResponse: ApiResponse = {
    status: 200,
    body: {
        username: "bobJones",
        isActive: true
    }
}

printApiResponse(exampleApiResponse);


