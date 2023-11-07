/* Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox ' */

function capitalizeFirstLetterOfEachWord(str) {
  const words = str.split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const upperCased = capitalizedWords.join(" ");
  return upperCased;
}

const str = "the quick brown fox";
const result = capitalizeFirstLetterOfEachWord(str);
console.log(result);

/* 
1.Split the input string into an array of words
2.Map over each word and capitalize the first letter
3.Slice used to add letters from index 1 to the end of the word
4.Join the capitalized words back into a string
*/
