/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

//Answer:

let world = "world";
alert(typeof world); 
//says its a string, therefore you need to change it to an array first.
//because strings are inmutable

function reverseTheString(str){
    let reversedString = str.split('').reverse().join('');
    alert(reversedString);
}


reverseTheString(world);
