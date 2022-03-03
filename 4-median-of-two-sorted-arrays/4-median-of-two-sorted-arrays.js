/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let allNums = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = parseInt(allNums.length / 2);

  if (allNums.length % 2 === 0) {
    return (allNums[mid - 1] + allNums[mid]) / 2;
  }

  return allNums[mid];

};