/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]] += 1;
    } else {
      map[arr[i]] = 1;
    }
  }

  let result = Object.values(map).sort((a, b) => a - b);
  let resultLength = result.length;
  for (let num of result) {
    if (k >= num) {
      k -= num;
      resultLength--;
      if (resultLength === 0) return 0;

    } else return resultLength;
  }
};