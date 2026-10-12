// Run from the repository root: node lectures/04-advanced-array-methods/practice/03-reduce-sort-practice.js
const durations = [320, 150, 980, 410];

// reduce() folds the array down into one number using an accumulator.
const totalDuration = durations.reduce((sum, duration) => sum + duration, 0);

console.log("Total duration:", totalDuration);

// sort() needs a comparator for numbers, otherwise it sorts as strings.
const sortedDurations = [...durations].sort((a, b) => a - b);

console.log("Sorted durations:", sortedDurations);

console.log(
  "Practice: use reduce() to calculate the average duration, and sort() to find the slowest one.",
);
