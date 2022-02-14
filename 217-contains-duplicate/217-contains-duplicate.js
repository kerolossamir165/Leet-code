/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 let isExist = nums.filter((el,i )=> nums.indexOf(el) !== i)
  return isExist.length ? true : false
};