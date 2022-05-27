/**
 * @param {number} num
 * @return {number}
 */

let recFun = (num, step = 0) => {
  if (num === 0) return step;
  if (num % 2 === 0) {
    step++;
    return recFun(num / 2, step);
  } else {
    step++;
    return recFun(num - 1, step);
  }
};



var numberOfSteps = function(num) {
    
      return recFun(num)

//       let step = 0;

//   while (num > 0) {
//     if (num % 2 === 0) {
//       step++;
//       num = num / 2;
//     } else {
//       step++;
//       num = num - 1;
//     }
//   }

//   return step;
};