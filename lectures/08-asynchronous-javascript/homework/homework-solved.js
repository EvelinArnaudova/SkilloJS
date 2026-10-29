function getTestResult() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Login", status: "PASS", duration: 500 });
    }, 1000);
  });
}

async function runSingleTest() {
  try {
    const result = await getTestResult();
    console.log(
      `Test for ${result.name} completed with status: ${result.status}`,
    );
    if (result.status === "PASS") {
      console.log(`Test for ${result.name} passed`);
    }
  } catch (error) {
    console.log(`Test failed: ${error.message}`);
  } finally {
    console.log("Test run finished");
  }
}

runSingleTest();

function getFailingTestResult() {
  return new Promise((a, reject) => {
    setTimeout(() => {
      reject(new Error("Could not reach test environment"));
    }, 1000);
  });
}

async function runFailingTest() {
  try {
    await getFailingTestResult();
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Test run finished");
  }
}

runFailingTest();

function getPLPtestResult() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "LoadPLP", status: "PASS", duration: 700 });
    }, 1000);
  });
}

function getPDPtestResult() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "LoadPDP", status: "PASS", duration: 800 });
    }, 1000);
  });
}
async function runTestsInParallel() {
  const [plpResult, pdpResult] = await Promise.all([
    getPLPtestResult(),
    getPDPtestResult(),
  ]);
  console.log(
    `Test for ${plpResult.name} completed with status: ${plpResult.status}`,
  );
  console.log(
    `Test for ${pdpResult.name} completed with status: ${pdpResult.status}`,
  );
}

runTestsInParallel();

//Optional challenge

async function validateTestResult(testResultPromise) {
  const result = await testResultPromise;
  if (result.status !== "PASS") {
    throw new Error(
      `Test for ${result.name} is failing with status: ${result.status}`,
    );
  }
  return result;
}

async function runValidations() {
  try {
    await validateTestResult(
      Promise.resolve({ name: "Checkout", status: "PASS" }),
    );
    console.log("Checkout validation Passed");
  } catch (error) {
    console.log(
      `Checkout validation failed, because of error : ${error.message}`,
    );
  }

  try {
    await validateTestResult(
      Promise.resolve({ name: "Checkout", status: "FAIL" }),
    );
    console.log("Checkout validation Passed");
  } catch (error) {
    console.log(
      `Checkout validation failed, because of error : ${error.message}`,
    );
  }
}

runValidations();
