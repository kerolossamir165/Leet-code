/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }
  return s.indexOf(Object.keys(map).find((key) => map[key] === 1));
};