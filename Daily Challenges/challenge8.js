/*
 Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
Sample array : [1, 2, 3] and subset length is 2
Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]
*/

function subSet(arr, len) {
  const subsets = [];
  function subset2(current, start) {
    if (current.length === len) {
      subsets.push([...current]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      subset2(current, i + 1);
      current.pop();
    }
  }
  subset2([], 0);
  return subsets;
}
const arr = [1, 2, 3];
const len = 2;
console.log(subSet(arr, len));
