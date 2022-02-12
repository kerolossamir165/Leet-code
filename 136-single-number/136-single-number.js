/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
 let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.keys(map).find((el) => map[el] === 1);
   
};