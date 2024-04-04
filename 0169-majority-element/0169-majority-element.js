/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    let halfOfNums = nums.length / 2
    for(let i = 0 ; i < nums.length ; i++ ) {
        if(!map[nums[i]]) {
            map[nums[i]] = 1
        }
        else {
           map[nums[i]] += 1
         }
    }
  for (const [key, value] of Object.entries(map)) {
      if(value > halfOfNums) {
        
        return key
      }
    }
};