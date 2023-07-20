function mergeAlternately(word1: string, word2: string): string {
  let newStr = "";
  let length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length ; i++) {
    if (word1[i] )  newStr += `${word1[i]}`;
    if(word2[i] ) newStr += `${word2[i]}`
  }

  return newStr;
}