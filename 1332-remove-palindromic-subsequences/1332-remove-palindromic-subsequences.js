/**
 * @param {string} s
 * @return {number}
 */
function  isPlaindrom(s) {
  let left =  0
  let right = s.length - 1 

  while(left < right) {
    if(s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
var removePalindromeSub = function(s) {
  return isPlaindrom(s) ? 1 : 2
};