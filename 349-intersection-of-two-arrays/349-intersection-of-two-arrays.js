/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
let map = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = nums1[i];
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] === 0 ? true : map[nums2[i]]) {
      result.push(nums2[i]);
    }
  }
  return result.filter((item, i) => {
    return result.indexOf(item) === i
  });
};