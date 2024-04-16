//TODO this is a brute force version of the two sum solution
//TODO it is a good first step to proving a valid solution
//TODO Time complexity: we perform n * n-1 / 2 comparisons = O(n2)
//TODO Space complexity O(1) as we do not include any extra arrays or hash maps

let twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return;
};

console.log(twoSum([2, 7, 11, 15], 9)); //TODO returns { i: 0, j: 1 }
console.log(twoSum([3, 2, 4], 6)); //TODO returns { i: 0, j: 1 }
console.log(twoSum([3, 3], 6)); //TODO returns { i: 0, j: 1 }
