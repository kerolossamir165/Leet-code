
let getPower = (num) => Math.pow(num, 2);

function sortedSquares(nums: number[]): number[] {
  return nums.map((el) => getPower(el)).sort((a, b) => a - b);  

};

