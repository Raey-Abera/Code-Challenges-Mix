https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript
// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected outputs: an array of positive integers from 1 to n
// Your job is to write an algorithm that gets you from the input to the output.

const preFizz = n => {
  let output = [];
  for(let i = 0; i < n; i++){
    console.log(i+1)
    output.push(i+1);
  }
  return output
}

//////////////////////////////////////////////////////////////////

// function preFizz(n) {
//   //storing array in variable output
//   let output = [];
//   //looping through the array
//   for (let i=1; i<n; i++)
// console.log(i)
//   {
//     output.push(i);
//   }
//   return output;
// }
