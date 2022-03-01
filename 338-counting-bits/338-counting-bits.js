/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
      const result = [0];
  for (let i = 1; i <= n; i++) {
    const converted = Number(i).toString(2);

    const count = converted
      .split("")
      .reduce((acc, nex) => (nex === "1" ? acc + 1 : acc), 0);
    result.push(count);
  }
  return result;
};