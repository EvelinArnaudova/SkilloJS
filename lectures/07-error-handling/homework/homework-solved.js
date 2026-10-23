// First Homework task

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
}

try {
  const user = validateUser({ username: "aliceGood" });
  console.log("User is:", user);
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
