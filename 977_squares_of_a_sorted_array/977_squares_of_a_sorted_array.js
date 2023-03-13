// <!-- /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */ -->
var sortedSquares = function (nums) {
  let res = [nums.length];

  let start = 0;
  let end = nums.length - 1;
  let resIndex = nums.length - 1;

  while (start <= end) {
    if (nums[start] * nums[start] > nums[end] * nums[end]) {
      res[resIndex--] = nums[start] * nums[start];
      start++;
    } else {
      res[resIndex--] = nums[end] * nums[end];
      end--;
    }
  }
  return res;
};
