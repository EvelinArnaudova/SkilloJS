class TestDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "TestDataError";
  }
}

const validateUser = (user) => {
  if (!user) throw new TestDataError("User is missing");

  if (!user.username) {
    throw new TestDataError("Username is missing");
  }
  return user;
};

try {
  const inputUser = { username: "aliceGood" };
  const validUser = validateUser(inputUser);
  console.log("User is:", validUser);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Validation attempt finished");
}

try {
  const invalidUser = validateUser("");
  console.log("User is:", invalidUser);
} catch (error) {
  if (error instanceof TestDataError) {
    console.log("Error is: ", error.message);
  } else {
    throw error;
  }
} finally {
  console.log("Validation attempt finished");
}

//Optional challenge

function parseTestConfig(jsonText) {
  try {
    const parsedJSON = JSON.parse(jsonText);
    return parsedJSON;
  } catch (error) {
    console.log(
      "JSON couldn't be parsed, because of this error: ",
      error.message,
    );
    return null;
  }
}

console.log("Valid scenario: ", parseTestConfig('{"username": "aliceGood"}'));
console.log("Invalid scenario: ", parseTestConfig("blabla"));
