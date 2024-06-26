https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
// "use strict";

//sort is a comparison function
//subtracting either gives 0, negative #, or positive # to sort array
const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b)


console.log('test1', flattenAndSort([]))//[]
console.log('test2', flattenAndSort([[], [1]]))//[1]
console.log('test3', flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('test4', flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))//[1, 2, 3, 4, 5, 6, 100]
