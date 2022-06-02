/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
//   let newArr = [];

//   for (let i = 0; i < nums.length; i++) {
   
//     newArr.push(nums.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0));
    
//   }
//   return newArr;
    
    let arrNums = []
    let prevValue = 0 
    
    for(let i = 0 ; i < nums.length ; i++ ) {
        prevValue = nums[i] + prevValue 
        
        arrNums.push(prevValue)
    }
    return arrNums
};