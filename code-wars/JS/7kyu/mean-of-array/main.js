//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.

const getAverage = marks => {
  //calculate the downward rounded average of the marks array
  let sum = 0
  marks.forEach((elmt)=>{
  sum += elmt
  })
  return parseInt(sum/marks.length)//sum of values divided by the number of values
}


// Sample Tests:
// 1
// Test.assertEquals(getAverage([2,2,2,2]),2);
// 2
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);
// 3
// Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
// 4
​
