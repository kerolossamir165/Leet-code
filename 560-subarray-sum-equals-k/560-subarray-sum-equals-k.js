/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = { 0: 1 };
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    count += map[sum - k] || 0;
    if (map[sum]) {
      map[sum] = (map[sum] || 0) + 1;
    } else {
      map[sum] = 1;
    }
  }
  return count;
};