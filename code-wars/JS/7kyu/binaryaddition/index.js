https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
//7kyu

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

function addBinary(a,b){
  return (a+b).toString(2)
}

// Test.describe("addBinary(1,2)", function() {
//   var results1 = addBinary(1,2);
//   Test.it("Should return something that isn't falsy", function() {
//     Test.expect(results1, "Something is wrong, no results!");
//   });
//   Test.it("Should return \"11\"", function() {
//     Test.assertEquals(results1, "11");
//   });
// });
