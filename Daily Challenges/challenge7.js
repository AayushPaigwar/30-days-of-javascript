/*
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
*/
function checkPair(num1, num2) {
  return num1 == 50 || num2 == 50 || num1 + num2 == 50;
}

console.log(checkPair(40, 10));
console.log(checkPair(20, 50));
console.log(checkPair(10, 49));

//Happy Diwali to all of you.🎇