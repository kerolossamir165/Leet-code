/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let splitText = (str) => {
  return str.split("#").reduce((acc, nex) => {
    
    return acc.substring(0, acc.length -1) + nex;
  }, "");
};

var backspaceCompare = function(s, t) {
    let textOne = splitText(s)
    let textTwo = splitText(t)
    return textOne === textTwo
};