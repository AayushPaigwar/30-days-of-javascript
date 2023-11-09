/*
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
 */

function AreaOfTriangle(a, b, c) {
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

console.log(AreaOfTriangle(5, 6, 7));
