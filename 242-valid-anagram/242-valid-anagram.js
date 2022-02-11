/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//   let sort = (str)=> str.split('').sort().join('')
//   return sort(s) === sort(t)
  let map = {};
   if(s.length !== t.length) {
     return false;
   }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!map[t[j]]) {
      return false;
    } else {
      map[t[j]] -= 1;
    }
  }

  return true;
};