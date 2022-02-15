/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let start = 0 , end = x 
  while (start <= end ) {
    let middle = Math.floor((start + end ) / 2 )
    if(middle * middle  === x ) {
      return middle
    } else if ( middle * middle > x ) {
      end = middle - 1
    } else {
      start = middle + 1 
    }
  } 
  return end
};