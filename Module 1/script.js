/*Challenge 1:
Write a JavaScript function that reverses a number.
Sample Data and output:
Example: 
x = 32243;
Expected Output: 34223*/

function reverseNumber(num) {
  let reverseNumber = 0;
  while (num > 0) {
    reverseNumber = reverseNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reverseNumber;
}

let num = 32243;
let reverseNum = reverseNumber(num);
console.log(reverseNum);
