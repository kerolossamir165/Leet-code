/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
 nums1.length = m
  nums2.length = n
  for(let i = 0 ; i < n ; i ++ ) {
    nums1[i + m ] = nums2[i]
  }
   nums1.sort((a ,b )=> a - b )
};