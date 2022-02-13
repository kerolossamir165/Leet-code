/**
 * @param {number[]} nums
 * @return {number[]}
 */
let getPower = (num) => Math.pow(num, 2);
var sortedSquares = function(nums) {
   let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(Math.pow(nums[i], 2));
    newNums.push(getPower(nums[i]));
  }

  return newNums.sort((a, b) => a - b);
};