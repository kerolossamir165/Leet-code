/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 let map = {};
  let flag = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
      flag++;
    } else {
      map[nums[i]] = 1;
    }
  }

  return flag ? true : false;
};