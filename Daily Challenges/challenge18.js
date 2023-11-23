/*
Write a JavaScript function named doubleValues that takes an array of numbers and returns a new array where each number is doubled using the map() method.
Inputs:
An array of numbers.
Outputs:
An array of numbers where each number is doubled.
Hints:
The map() method creates a new array with the results of calling a function for every array element.
*/

function doubleValues(arr) {
  return arr.map((Number) => Number * 2);
}

const arr = [6, 2, 3, 4, 5];
console.log(doubleValues(arr));
