function mySqrt(x: number): number {
 let start:number = 0 , end:number = x 
    
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