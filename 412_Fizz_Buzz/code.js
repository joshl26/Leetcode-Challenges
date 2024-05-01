/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return new Array(n)
    .fill(0)
    .map((a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};

const fizzBuzz = (n) => {
  let res = [];

  for (let i = 1; i <= n; i++) {
    let string = "";
    if (i % 3 === 0) string += "Fizz";
    if (i % 5 === 0) string += "Buzz";

    if (string === "") string += i;
    res.push(string);
  }

  return res;
};
