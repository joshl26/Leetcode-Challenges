/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//ALTERNATE SOLUTION
//apply two pointer method where nums: string[]
//   var left = 0;
//   for (var right = nums.length - 1; right >= left; right--) {
//     var temp = nums[left]; // declaring a variable to memorize left value before it is changed
//     nums[left] = nums[right];
//     nums[right] = temp;
//     left++;
//   }
//   return nums;

var reverseString = function (s) {
  let l = s.length;

  let ch = "";

  for (let i = 0; i < l / 2; i++) {
    ch = s[i];

    s[i] = s[l - (i + 1)];

    s[l - (i + 1)] = ch;
  }
};
