/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for(let i = 0 ; i < nums.length ; i++ ) {
    for(let j = 0 ; j < nums.length - 1 ; j++ ) {
     if(nums[i] < nums[j]) {
      var temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
     }
    }
  }

  return nums
};