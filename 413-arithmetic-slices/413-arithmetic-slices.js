/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
     let flag = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
  
    if (nums[i] - nums[i -1] ===  nums[i - 1] - nums[i - 2]) {
      flag++;
      result += flag;
    } else {
        flag = 0
    }
  }
  return result;
};