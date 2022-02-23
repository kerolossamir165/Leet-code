/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
 let flag = 0;
  let check = t
    .split("")
    .filter((el) => {
      if (el === s.charAt(flag)) {
        flag++;
        return el;
      }
    })
    .join("");

  return check === s;
};