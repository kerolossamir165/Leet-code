/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
      let res = 0;
//setting the map 
  let map = {};
    
 // if the element exist (check if it is == 0 && 1 // increase res 
    //else check if it the item + k || item - k  === in the items that in the map 
    // that lead to this is the numbers that give us key 
    // if not store to the map with value 1
    
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      if (k === 0 && map[nums[i]] === 1) {
        res++;
      }
      map[nums[i]] += 1;
    } else {
      if (map[nums[i] - k]) res++
     if (map[nums[i] +k]) res++

    
      map[nums[i]] = 1;
    }
  }

  return res;
};