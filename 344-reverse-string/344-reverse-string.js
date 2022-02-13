/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let flag = 0;
  for (let i = 0; i < s.length; i++) {
    s.splice(i, 0, s.pop());
    flag++;
  }
  return s;
};