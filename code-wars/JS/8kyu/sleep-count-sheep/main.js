// If you can't sleep, just count sheep!!
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = num => {

  let sum = '';
  for (let i = 1; i < num + 1; i++) {
    sum += [i] + ' sheep...'
  }
  return sum;
}

console.log(countSheep(1))//"1 sheep..."
console.log(countSheep(2))//"1 sheep...2 sheep..."
console.log(countSheep(3))//"1 sheep...2 sheep...3 sheep..."

