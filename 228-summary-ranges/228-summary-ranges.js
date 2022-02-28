/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let string = num + "";
      
    // if the nextIndex === nextValue in array ? include it in range : continue
    while (nums[i + 1] === nums[i] + 1) {
      // means include it into array 
      i++;
    }
    
    // check the shape of the string
    if (nums[i] !== num) {
      string += "->" + nums[i];
    }
    list.push(string);
  }

  return list;
};