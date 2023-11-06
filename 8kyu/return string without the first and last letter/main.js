/*

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

// Answer

function removeChar(str) {
  if (str.length < 2) {
    return "String is too short to remove first and last characters";
  }

  return str.slice(1, -1);
}


//Answer #2

const removeChar = str => str.slice(1,-1)
