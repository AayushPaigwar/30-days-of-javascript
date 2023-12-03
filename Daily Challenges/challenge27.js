/*
Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.
Solution Approach:
Use the function* syntax for generator functions and the yield keyword.
*/

"use strict";

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const start = 1;
const end = 5;
const numbersInRange = [...range(start, end)];
console.log("NUMBERS IN RANGE", numbersInRange);
