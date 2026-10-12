//Homework: task 1, 2, 3 and 4

const testResults = [200, 201, 404, 200, 500, 204];
let counterPASSED = 0;
let counterFAILED = 0;
let counterALL = 0;

for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] >= 200 && testResults[i] < 300) {
    console.log(`PASS: ${testResults[i]} is in the 200 range`);
    counterPASSED++;
  } else {
    console.log(`FAIL: ${testResults[i]} is not in the 200 range`);
    counterFAILED++;
  }
  counterALL++;
}
console.log(`Total PASS results: ${counterPASSED}`);
console.log(`Total FAIL results: ${counterFAILED}`);
console.log(`Total results: ${counterALL}`);

//Homework: task 5

const testUsers = ["user123", "", "user5768", "blablaUser", ""];

for (const user of testUsers) {
  if (!user) {
    continue;
  }
}

//Homework: task 6

const browsers = ["Chrome", "Firefox", "Safari"];
const environments = ["QA", "Staging"];

for (const browser of browsers) {
  for (const environment of environments) {
    if (browser === "Safari" && environment === "QA") {
      console.log(`Skipping ${browser} on ${environment}`);
      continue;
    }
  }
}

//Optimal challenge

const statusCodes = [200, 201, 404, 304, 500, 502];

for (const statusCode of statusCodes) {
  if (statusCode >= 500 && statusCode < 600) {
    console.log(`The test has stopped, because status code is: ${statusCode}`);
    break;
  }
}
