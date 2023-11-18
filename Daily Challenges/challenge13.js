/*
Problem Statement: Implement a memoization function.

Description: Write a function that takes a function as its argument and returns a memoized version of the function.

Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
*/

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!(key in cache)) {
      cache[key] = func.apply(this, args);
    }

    return cache[key];
  };
}

function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * calculateFactorial(num - 1);
}
const memoizedFactorial = memoize(calculateFactorial);
console.log(memoizedFactorial(3));
console.log(memoizedFactorial(3));
console.log(memoizedFactorial(4));
console.log(memoizedFactorial(4));
