/*
Write a function to deeply compare two objects for equality.
Description: Given two objects, the function should return true if they are deeply equal and false otherwise.
Solution Approach: Recursively compare properties of both objects.
*/

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

const o1 = { a: 10, b: 20, c: { d: { e: 50 } } };
const o2 = { a: 10, b: 20, c: { d: { e: 50 } } };
const o3 = { a: 10, b: 20, c: { d: { e: 20 } } };
const o4 = { a: 10, b: 20, c: { d: 20, e: 20 } };
console.log(deepEqual(o1, o2));
console.log(deepEqual(o1, o3));
console.log(deepEqual(o1, o4));
