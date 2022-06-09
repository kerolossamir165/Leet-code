/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0 
  let right = numbers.length - 1 

  while(left < right) {
    let sameTarget = numbers[left] + numbers[right]
    if(sameTarget === target) {
      break
    }
    
     if (sameTarget > target) {
      right--;
    } else {
      left++;
    }
  }
  return [left + 1 , right+1]
};