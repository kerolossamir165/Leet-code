/**
 * @param {string[]} words
 * @return {number}
 */



let aplphbetToMorse = {a: ".-",
b: "-...",
c: "-.-.",
d: "-..",
e: ".",
f: "..-.",
g: "--.",
h: "....",
i: "..",
j: ".---",
k: "-.-",
l: ".-..",
m: "--",
n: "-.",
o: "---",
p: ".--.",
q: "--.-",
r: ".-.",
s: "...",
t: "-",
u: "..-",
v: "...-",
w: ".--",
x: "-..-",
y: "-.--",
z: "--..",
}


var uniqueMorseRepresentations = function(words) {

  let set = new Set()
  let map = {}
  
  for (let i = 0; i < words.length; i++) {
    let str = "";
    for (let l = 0; l < words[i].length; l++) {
      const c = words[i][l].toLowerCase()
      str += aplphbetToMorse[c];
    
    }
    set.add(str)
    if(!map[str]) {
      map[str] = 0;
    }
    map[str]++;
  }



return set.size
};