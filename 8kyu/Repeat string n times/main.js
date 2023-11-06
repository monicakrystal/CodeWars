/*

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)

*/


//Answer:

function repeatStr(n, s) {
  if (Number.isInteger(n)) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += s;
    }

    return result;
  } else {
    return "Invalid input";
  }
