/**
 * @param {number} num
 * @return {number}
 */

function splitNum(num) {
  let arr = String(num).split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}

var addDigits = function(num) {
    while (!(num <= 9)) {
    num = splitNum(num);
  }
  return num
};