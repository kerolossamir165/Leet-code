/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let newMaxtix = matrix.flat().sort((a , b )=> a - b )
  
    return newMaxtix.find((el , i) => {
      if(i + 1 === k ) {
        return el
      }
    })
};