/*
Write an asynchronous loop function that iterates over an array and performs an asynchronous operation on each element.
Description: The function should take an array and an async function, applying the async function to each element in the array in sequence.
Solution Approach: Use async/await within a for...of loop.
*/

async function asyncLoop(arr, asyncFunc) {
  for (const element of arr) {
    await asyncFunc(element);
  }
}

const arr = [1, 2, 3, 4, 5];

async function asyncOperation(number) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(number);
}

asyncLoop(arr, asyncOperation);

