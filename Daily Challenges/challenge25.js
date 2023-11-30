/*
Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.
Use any random API that you want
Solution Approach:
Utilize the .then method to chain promises.
*/

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

function getData() {
  let combinedData = {};
  return fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then((data1) => {
      combinedData = { ...combinedData, ...data1 };
      return fetchData("https://jsonplaceholder.typicode.com/todos/2");
    })
    .then((data2) => {
      combinedData = { ...combinedData, ...data2 };
      return combinedData;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

getData()
  .then((combinedData) => console.log("COMBINED DATA", combinedData))
  .catch((error) => console.log("ERROR:", error));
