function twoSum(numbers: number[], target: number): number[] {
  let left:number = 0;
  let right:number = numbers.length - 1;

  while (left < right) {
    let sameTarget = numbers[left] + numbers[right];
    if (sameTarget === target) {
      break;
    }
    if (sameTarget > target) {
      right--;
    } else {
      left++;
    }
  }
  return [left + 1, right + 1];
};