// Run from the repository root: node lectures/02-js-fundamentals-for-testing/practice/02-number-calculations.js
const itemsPerPage = 10;
const totalItems = 47;

const totalPages = Math.ceil(totalItems / itemsPerPage);
const itemsOnLastPage = totalItems % itemsPerPage || itemsPerPage;

console.log("Total pages:", totalPages);
console.log("Items on the last page:", itemsOnLastPage);

console.log(
  "Practice: change totalItems and itemsPerPage, then predict totalPages.",
);
