/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
   const map = {}
  let count = 0
    for(let i = 0 ; i < nums.length ; i++ ) {
    if(map[nums[i]]) {
      map[nums[i]]--
      count++
    } else {
      map[k - nums[i]] = map[k - nums[i]] + 1 || 1
    }
  }
  return count
};