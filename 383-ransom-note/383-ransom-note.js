/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
   for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) !== -1) {
      magazine = magazine.replace(ransomNote[i], "");
    } else {
      return false;
    }
  }
  return true;
};