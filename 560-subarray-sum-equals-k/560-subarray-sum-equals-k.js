/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let sum = 0;
  let count = 0;
  let map = { 0: 1 };

  for (let num of nums) {
    count += num;
    sum += map[count - k] || 0;
    map[count] = (map[count] || 0) + 1;
  }

  return sum;
};