https://www.codewars.com/kata/53369039d7ab3ac506000467
//8kyu

// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


function boolToWord(bool){
  return bool ? "Yes": "No"
}
// Sample Tests:

//boolToWord(true), 'Yes'
//boolToWord(false), 'No'
//boolToWord(), 'No'
