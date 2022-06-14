/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let reslt = []
  
  for(let i = 0 ; i < nums.length ; i++ ) {
      let pos = ( nums.length - (k % nums.length )+ i ) % nums.length
      reslt[i] = nums[pos]
  }
    
    for(let i = 0 ; i < nums.length ; i++ ) {
        nums[i] = reslt[i]
    }
};