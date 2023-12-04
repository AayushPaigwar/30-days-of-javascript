/*
Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.
Solution Approach:
Use Promise.race and a timeout promise.
*/

function raceWithTimeout(promises, timeout) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timed out"));
    }, timeout);
  });

  return Promise.race([...promises, timeoutPromise]);
}

const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 2000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 4000)
);
const timeoutvalue = 3000;

raceWithTimeout([p1, p2], timeoutvalue)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.log("Error:", error.message));
