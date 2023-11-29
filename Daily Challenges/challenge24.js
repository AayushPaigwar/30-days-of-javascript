/*
Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.
Solution Approach:
Use a timer and clear it on each invocation to delay the function execution.
*/

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function myFunction(name) {
  console.log(`Deboune function called with name: ${name}`);
}

const debouncedFunction = debounce(myFunction, 400);
debouncedFunction("Aayush");
