//TODO This solution uses a hash table to reduce time complexity
//TODO and speed up the processing time.

let twoSum = function (nums, target) {
  let map1 = new Map();

  for (let i = 0; i <= nums.length - 1; i++) {
    map1.set(nums[i], i);
  }
  for (let i = 0; i <= nums.length; i++) {
    let complement = target - nums[i];
    if (map1.size && map1.get(complement) != i) {
      return [i, map1.get(complement)];
    }
  }
  return;
};

console.log(twoSum([2, 5, 5, 11], 10));

//TODO be aware this code has issues with target sizes larger than 10
