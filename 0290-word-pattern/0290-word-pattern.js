/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   let dataPattern = {};
  let dataS = {};
  let arrS = s.split(' ');
  let setPattern = new Set([...pattern]);
  let setWords = new Set([...arrS]);
  console.log(pattern.length !== arrS.length);

  if (pattern.length !== arrS.length || setPattern.size !== setWords.size)
    return false;

  for (let i = 0; i < pattern.length; i++) {
    if (dataPattern[pattern[i]]) {
      if (dataS[arrS[i]] !== pattern[i]) return false;
    } else {
      dataPattern[pattern[i]] = arrS[i];
      dataS[arrS[i]] = pattern[i];
    }
  }
  return true;  
};