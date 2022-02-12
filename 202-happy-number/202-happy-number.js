/**
 * @param {number} n
 * @return {boolean}
 */
let getPower = (n) => Math.pow(+n, 2);
let getTotal = (num) =>
  num
    .toString()
    .split("")
    .reduce((acc, next) => {
      return (acc += getPower(next));
    }, 0);
var isHappy = function (n) {
  console.clear();
  let flag = 0;
  let checkOfHappy = (num) => {
    flag++;
    let total = getTotal(num);
    if (total === 1) {
      return true;
    } else {
      if (flag > 100) {
        return false;
      }
      return checkOfHappy(total);
    }
  };
  return checkOfHappy(n);
};
