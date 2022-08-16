function firstUniqChar(s: string): number {
 let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? (map[s[i]] += 1) : (map[s[i]] = 1);
  }
  return s.indexOf(Object.keys(map).find((key) => map[key] === 1));
};