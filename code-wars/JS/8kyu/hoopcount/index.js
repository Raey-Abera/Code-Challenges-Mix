https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
   //your code goes here
   for( var i = 0; i <=n; i++)
   if(n >= 10){
   return  'Great, now move on to tricks'
   }else{
   return "Keep at it until you get it"
   }
}

// Sample Tests:
// 1
// Test.assertEquals(hoopCount(3),"Keep at it until you get it" )
// 2
// Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
