/*
Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
Solution Approach:
Combine map, filter, and reduce array methods.
*/

function calculateTotal(numbers) {
  const squaredOddNumbers = numbers
    .filter((number) => number % 2 !== 0)
    .map((number) => number * number)
    .reduce((acc, curr) => acc + curr, 0);
  return squaredOddNumbers;
}

const numbers = [1, 2, 3, 4, 5];
const total = calculateTotal(numbers);
console.log("TOTAL", total);
