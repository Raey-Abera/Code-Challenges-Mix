https://www.codewars.com/kata/5a092d9e46d843b9db000064
//7kyu

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3
// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4
// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3
// (the only-positive or only-negative integer may appear more than once)

const solve = arr => [...new Set(arr)].reduce((acc, curr) => acc + curr);

console.log(solve([1, -1, 2,-2, 3]))//3
console.log(solve([-3,1,2,3,-1,-4,-2]))//-4
console.log(solve([1,-1,2,-2,3,3]))//3
console.log(solve([-110,110,-38,-38,-62,62,-38,-38,-38]))//-38
console.log(solve([ -9,-105,-9,-9,-9,-9,105]))//-9