//TODO This solution uses a hash table to reduce time complexity
//TODO and speed up the processing time.

let twoSum = function (nums, target) {
  const numToIndex = new Map(); // Create a Map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement exists in the Map
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }

    // Store the current number and its index in the Map
    numToIndex.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
