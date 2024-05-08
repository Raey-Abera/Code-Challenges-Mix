https://www.codewars.com/kata/586f6741c66d18c22800010a
// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
let sum = 0
  if( begin > end ){
    sum = 0
  }else{
  for(let i = begin; i <= end; i += step){
  sum += i
  }
  }
  return sum
};

// Test.assertSimilar(sequenceSum(2, 6, 2), 12) // sequenceSum( (begin, end, step), answer)
// Test.assertSimilar(sequenceSum(1, 5, 1), 15)
// Test.assertSimilar(sequenceSum(1, 5, 3), 5)
