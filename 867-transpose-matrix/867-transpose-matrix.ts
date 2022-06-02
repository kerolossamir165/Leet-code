function transpose(matrix: number[][]): number[][] {
  let arr:number[][] = [];
  // loop through every element in the first array 
  for (let i = 0; i < matrix[0].length; i++) {
    
    arr.push([]);
    // loop through every element in the matrix 
    for (let j = 0; j < matrix.length; j++) {
      arr[arr.length - 1].push(matrix[j][i]);
    }
  }

  return arr;
};