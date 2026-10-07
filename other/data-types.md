I’ll give you a concise overview of the main JavaScript/TypeScript data types and how they’re used in QA automation.

## Overview of JavaScript / TypeScript Data Types

These are the most common data types you’ll use in JavaScript and TypeScript for testing and automation:

### 1) Number

- Represents numeric values.
- Includes integers and decimals.
- Example:

  ```ts
  let age: number = 30;
  let price: number = 19.99;
  ```

- Common use in QA:
  - checking response codes
  - validating thresholds
  - comparing counts or durations

- Example:
  ```ts
  const statusCode: number = 200;
  const timeout: number = 5000;
  ```

---

### 2) Boolean

- Represents only two values:
  - `true`
  - `false`

- Example:

  ```ts
  let isLoggedIn: boolean = true;
  let isPassed: boolean = false;
  ```

- Common use in QA:
  - checking conditions
  - asserting expected results
  - controlling flow in tests

- Example:
  ```ts
  const isValid: boolean = response.status === 200;
  if (isValid) {
    console.log("Request succeeded");
  }
  ```

---

### 3) String

- Represents text.
- Written with single quotes, double quotes, or backticks.
- Example:

  ```ts
  let name: string = "Alice";
  let message: string = `Hello ${name}`;
  ```

- Common use in QA:
  - URLs
  - response messages
  - test data
  - user names, titles, IDs

- Example:
  ```ts
  const userId: string = "user-123";
  const url: string = "https://example.com/api/users";
  ```

---

### 4) Array

- Represents a list of values.
- Can contain numbers, strings, objects, etc.
- Example:

  ```ts
  let numbers: number[] = [1, 2, 3, 4];
  let names: string[] = ["Alice", "Bob"];
  ```

- Common use in QA:
  - test datasets
  - list of API responses
  - multiple users, multiple products, multiple assertions

- Example:

  ```ts
  const users: string[] = ["admin", "tester", "manager"];
  console.log(users[0]); // "admin"
  ```

- Array examples with objects:
  ```ts
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ];
  ```

---

### 5) Object

- Represents a collection of key-value pairs.
- Used to model structured data.
- Example:

  ```ts
  const user: {
    name: string;
    age: number;
    isActive: boolean;
  } = {
    name: "Alice",
    age: 25,
    isActive: true,
  };
  ```

- Common use in QA:
  - API request bodies
  - response payloads
  - test cases
  - config objects

- Example:

  ```ts
  const response = {
    status: 200,
    message: "Success",
    data: {
      id: 101,
      name: "John",
    },
  };
  ```

- Accessing object values:
  ```ts
  console.log(response.status); // 200
  console.log(response.data.name); // "John"
  ```

---

## Important note about TypeScript

TypeScript adds type annotations, so you can define what kind of value a variable should hold.

Example:

```ts
let score: number = 10;
let passed: boolean = true;
let title: string = "Test Result";
let tags: string[] = ["smoke", "regression"];
let config: {
  url: string;
  retries: number;
} = {
  url: "https://example.com",
  retries: 3,
};
```

This helps catch mistakes early in automation code.

---

## Quick summary

- Number → numeric values
- Boolean → true/false
- String → text
- Array → ordered list
- Object → structured data
