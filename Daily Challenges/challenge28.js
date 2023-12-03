/*
Create a proxy object that intercepts and logs all property access.
Solution Approach:
Use the Proxy object to create a wrapper around another object.
*/

let person = {
  name: " John Cena",
  age: 30,
};

let handler = new Proxy(person, {
  get: function (target, property, receiver) {
    console.log(`Property "{$property}" assured.`);
    return Reflect.get(target, property, receiver);
  },
});
console.log(handler.name);
console.log(handler.age);
