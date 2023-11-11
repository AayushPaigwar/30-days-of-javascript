/* 
Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
*/

//  Method - 1
function sumTriple(num1, num2) {
  if (num1 == num2) {
    return "Method-1\nThe triple of their sum: " + 3 * (num1 + num2);
  } else {
    return "The two numbers are not same. ";
  }
}
console.log(sumTriple(5, 5));
console.log(sumTriple(20, 10));

// Method - 2 (if-else shorthand - ternary operator)
function sumTriple1(num1, num2) {
  return num1 == num2 ? 3 * (num1 + num2) : "The two numbers are not same.";
}
console.log("Method-2\nThe triple of their sum:", sumTriple1(5, 5));
console.log(sumTriple1(20, 10));
