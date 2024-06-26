https://www.codewars.com/kata/5a512f6a80eba857280000fc
// Task: Given an array/list [] of integers, Find the Nth smallest element in this array of integers

const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1]

console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)) //7
console.log(nthSmallest([-5, -1, -6, -18], 4)) //-1
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5)) //-2
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4)) //2