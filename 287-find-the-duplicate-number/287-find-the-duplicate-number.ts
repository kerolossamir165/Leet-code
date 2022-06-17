function findDuplicate(nums: number[]): number {
 let map = new Map();
  let position;

  for (let i = 0; i < nums.length; i++) {
    position = map.get(nums[i]) || 0;
    map.set(nums[i], position + 1);
  }

  for (let [key, val] of map) {
    if (val > 1) return key
  }
  return -1;
    
};