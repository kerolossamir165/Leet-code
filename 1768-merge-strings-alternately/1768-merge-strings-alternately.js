/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = "";
  let lengthWord = word1.length < word2.length ? word1.length : word2.length
  let wordRemain =
    word1.length < word2.length
      ? word2.substring(word1.length)
      : word1.substring(word2.length);

  for (let i = 0; i < lengthWord; i++) {
    console.log(word1[i], word2[i]);
    str += word1[i] + word2[i];
  }
  return str + wordRemain
};