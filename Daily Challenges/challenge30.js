/*
Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
Solution Approach:
Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.
*/

function throttle(func, interval) {
  let lastInvokeTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastInvokeTime >= interval) {
      lastInvokeTime = now;
      return func.apply(this, args);
    }
  };
}

const throttledFunction = throttle(function () {
  console.log("Function being called as per given interval");
}, 1000);

throttledFunction();
