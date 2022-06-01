function hasTargetSum(array, target) {
  //iterate over array
  for (let i = 0; i < array.length; i++) {
    //find complimentary number
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      //see if array[j] is complimentary to array[i]
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  iterate over array
  find 2 numbers that equal target sum
  if(i + j === target) return true


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
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
