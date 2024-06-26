https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//8kyu

// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){

  let sum = '';
  for( let i = 1; i<num + 1; i++ ){
    sum += [i] + ' sheep...'
  }
  return sum;
}

// Sample Test
// Test.assertEquals(countSheep(1), "1 sheep...");
// Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
// Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
// 1
// Test.assertEquals(countSheep(1), "1 sheep...");
// 2
// Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
// 3
// Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
