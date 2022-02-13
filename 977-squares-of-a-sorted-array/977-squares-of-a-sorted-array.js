/**
 * @param {number[]} nums
 * @return {number[]}
 */
let getPower = (num) => Math.pow(num, 2);
var sortedSquares = function(nums) {
  return nums.map((el) => getPower(el)).sort((a, b) => a - b);  
};