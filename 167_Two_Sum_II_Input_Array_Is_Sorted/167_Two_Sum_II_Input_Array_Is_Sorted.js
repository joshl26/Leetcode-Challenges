// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (numbers, target) {
  let index = [];

  if (numbers === null || numbers.length < 2) {
    return index;
  }

  let left = 0;

  let right = numbers.length - 1;

  while (left < right) {
    let v = numbers[left] + numbers[right];

    if (v === target) {
      index[0] = left + 1;
      index[1] = right + 1;
      break;
    } else if (v > target) {
      right--;
    } else {
      left++;
    }
  }
  return index;
};
