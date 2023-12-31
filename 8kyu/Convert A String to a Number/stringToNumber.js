/* 

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

*/


// Answer:

const stringToNumber = function(str){
  let makeNumber = Number(str);
  return makeNumber;
}


// Other Answer:

const stringToNumber = function(str){
  let makeNumber = parseInt(str, 10);
  return makeNumber;
}

// Another Answer: 

const stringToNumber = function(str){
  let makeNumber = parseFloat(str);
  return makeNumber;
}

// Another Possible Answer:

const stringToNumber = function(str){
  let makeNumber = +str;
  return makeNumber;
}
