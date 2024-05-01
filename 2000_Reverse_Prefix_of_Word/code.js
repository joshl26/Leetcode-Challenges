/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  var left = 0;
  var right = word.indexOf(ch);
  const arr = word.split("");

  if (right === -1) return word;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join("");
};
