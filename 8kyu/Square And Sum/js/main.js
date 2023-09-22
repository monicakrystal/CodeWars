/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

1 squared, 2 squared + 2 squared = 9
*/

function squareSum(numbers) {
  let squared = numbers.map(number => number * number);
 return squared.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

squareSum([1, 2, 2]);

//returns 9