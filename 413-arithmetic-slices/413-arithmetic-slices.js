/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
     let flag = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let dif1 = nums[i] - nums[i + 1];
    let dif2 = nums[i + 1] - nums[i + 2];
    if (dif1 === dif2) {
      flag++;
      result += flag;
    } else {
        flag = 0
    }
  }
  return result;
};