/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sort = (str)=> str.split('').sort().join('')

  return sort(s) === sort(t)
};