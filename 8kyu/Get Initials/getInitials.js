/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

//Monica Krystal

function abbrevName(name){
  // split names
  
  let fullName = name.split(' ');
  
  let initials = fullName.map(names => names[0].toUpperCase()).join('.');
  return initials;
}

// returns M.K
