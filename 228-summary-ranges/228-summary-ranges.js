/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
      let list = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let string = num + "";

    while (nums[i + 1] === nums[i] + 1) {
      i++;
    }

    if (nums[i] !== num) {
      string += "->" + nums[i];
    }
    list.push(string);
  }

  return list;
};