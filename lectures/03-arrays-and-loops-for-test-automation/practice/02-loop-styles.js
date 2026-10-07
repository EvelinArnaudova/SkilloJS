// Run from the repository root: node lectures/03-arrays-and-loops-for-test-automation/practice/02-loop-styles.js
const environments = ["dev", "qa", "staging", "prod"];

for (let i = 0; i < environments.length; i++) {
  console.log(`Environment at index ${i}: ${environments[i]}`);
}

for (const environment of environments) {
  console.log(`Running smoke test on ${environment}`);
}

console.log(
  "Practice: rewrite the first for loop above as a for...of loop, and confirm the output stays the same.",
);
