/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     let splitedstring = s.split(" ");
  let newString = [];

  for (let i = 0; i < splitedstring.length; i++) {
    newString.push(splitedstring[i].split("").reverse().join(""));
  }
  return newString.join(" ");
};