// Runtime: 0(n)
// Space: 0(n)
function hasTargetSum(array, target) {
  const seenNumbers = {}
  
  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}

// Runtime: 0(n^2)
// Space: 0(n)
// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = 0; j < array.length; j++) {
//       if (array[j] = complement) return true;
//     }
//   }
//   return false;
// }

/* 
  Pseudocode:
  
  first solution:
  create an object of to keep track of numbers we've already seen
  iterate through each number in the array
  for the current number, identify a complement that adds up to the target (complement = target - number)
  check if any key on our object is the complement
  if so, return true
  otherwise, add that number to the object

  second solution:
  iterate through each number in the array
  for the current number, identify a complement that adds up to the target (complement = target - number)
  iterate through the rest of the array
  check if any number is our complement
  if so, return true
  if end of the array is reached, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  // Negative numbers
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
