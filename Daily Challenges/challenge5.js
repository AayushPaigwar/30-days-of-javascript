/* 
Write a JavaScript exercise to get the filename extension.
*/

function fileExtension(filename) {
  return filename.split(".").pop();
}

console.log("The file extension is: ", fileExtension("index.html"));
