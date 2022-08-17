/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {let aplphbet = Array.from(Array(26))
    .map((el, i) => i + 97)
    .map((el) => String.fromCharCode(el));
  let morseArr = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  let set = new Set()
  let map = {}
  
  for (let i = 0; i < words.length; i++) {
    let str = "";
    for (let l = 0; l < words[i].length; l++) {
      const character = words[i][l];
      let index = morseArr.find((el, i) => i === aplphbet.indexOf(character));
      str += index;
    }
    set.add(str)
    console.log(str)
    if(!map[str]) {
      map[str] = 0;
    }
    map[str]++;
  }



return set.size
};