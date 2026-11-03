enum TestStatus {
  Passed = "PASS",
  Failed = "FAIL",
  Skipped = "SKIP",
}

class TestResult {
  public readonly id: number;
  public name: string;
  private description: string;
  protected status: TestStatus;
  constructor(
    name: string,
    description: string,
    status: TestStatus,
    id: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
  }
  public printSummary(): void {
    console.log(`Test case: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Status: ${this.status}`);
  }
}

class DetailedTestResult extends TestResult {
  public duration: number;
  constructor(
    name: string,
    description: string,
    status: TestStatus,
    duration: number,
    id: number,
  ) {
    super(name, description, status, id);
    this.duration = duration;
  }
  public printDetailedSummary(): void {
    this.printSummary();
    console.log(`Duration is: ${this.duration}`);
  }
}

const loginTest = new DetailedTestResult(
  "TC-01 - Login Test",
  "User logs in via the login form",
  TestStatus.Passed,
  120,
  1,
);
loginTest.printDetailedSummary();

// loginTest.id = 4; // error TS2540: Cannot assign to 'id' because it is a read-only property.

const socialLoginTest = new DetailedTestResult(
  "TC-02 - Social Login Test",
  "User logs in via Google",
  TestStatus.Failed,
  10,
  2,
);
socialLoginTest.printDetailedSummary();

function getFirstResult<T>(results: T[]): T | undefined {
  return results[0];
}

//Not sure if I have to call both instances in the array or create separate calls for each, but this is how I understood the assignment
console.log(getFirstResult([loginTest, socialLoginTest]));

function ApiResponse<T>(status: number, data: T) {
  return {
    status,
    data,
  };
}

const logTestApiResponse = ApiResponse<DetailedTestResult>(200, loginTest);
console.log(
  `Test name is : ${logTestApiResponse.data.name} and its API response status is: ${logTestApiResponse.status}`,
);
