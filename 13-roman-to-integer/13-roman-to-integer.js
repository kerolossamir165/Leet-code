/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
 let values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
};
  let sum = 0;
  let splitedText = s.split("");
  for (let i = 0; i < splitedText.length; i++) {
    let val = values[splitedText[i]];
    let nextVal = values[splitedText[i + 1]];
    if (val < nextVal) {
      sum = sum - val;
    } else {
      sum = sum + val;
    }
  }

  return sum;
    
};