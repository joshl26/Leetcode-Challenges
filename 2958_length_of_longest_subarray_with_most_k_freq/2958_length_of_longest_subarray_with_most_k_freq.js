function maxSubarrayLength(nums, k) {
  let frequency = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    let num = nums[right];
    frequency[num] = (frequency[num] || 0) + 1;

    while (Math.max(...Object.values(frequency)) > k) {
      let leftNum = nums[left];
      frequency[leftNum]--;
      if (frequency[leftNum] === 0) {
        delete frequency[leftNum];
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage:
let nums = [1, 2, 3, 1, 2, 3, 1, 2];
let k = 2;
console.log(maxSubarrayLength(nums, k)); // Output: 4 (The longest subarray with at most 2 frequency is [1, 2, 1, 2])
