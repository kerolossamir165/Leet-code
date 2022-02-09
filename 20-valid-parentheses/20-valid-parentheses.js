/**
 * @param {string} s
 * @return {boolean}
 */
let valus = {
  "(": ")",
  "{": "}",
  "[": "]"
};

var isValid = function (s) {
  
let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (valus[s[i]]) {
      stack.push(s[i]);
    } else {
      if (valus[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return !stack.length;
};