function findKthLargest(nums: number[], k: number): number {
 let done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < nums.length; i += 1) {
      if (nums[i - 1] > nums[i]) {
        done = false;
        let tmp = nums[i - 1];
        nums[i - 1] = nums[i];
        nums[i] = tmp;
      }
    }
  }
  return nums[nums.length - k]
};