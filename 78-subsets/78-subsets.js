/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
   let result = [[]];

  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    result.forEach((item) => {
      result.push([...item, element]);
    });
  }
  return result;
};