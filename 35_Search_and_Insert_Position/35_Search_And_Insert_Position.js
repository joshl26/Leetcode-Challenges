// @param {number[]} nums
// @param {number} target
// @return {number}

var nums = [1, 3, 5, 6];
var target = 5;

var searchInsert = function (nums, target) {
  var start = 0;
  var end = nums.length - 1;

  while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] == target) {
      return mid;
    }

    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

var test = searchInsert(nums, target);

console.log(test);
