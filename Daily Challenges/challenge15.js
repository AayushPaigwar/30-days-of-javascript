/*
Problem Description -
create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
Test Data :
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
["Scaler"]
['Sc' , 'al' ,'er']
*/

function string_chop(str, size = 1) {
  if (size < 1) {
    return "Size must be greater than 0";
  }
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

console.log(string_chop("Scaler", 0));
console.log(string_chop("Scaler"));
console.log(string_chop("Scaler", 2));
