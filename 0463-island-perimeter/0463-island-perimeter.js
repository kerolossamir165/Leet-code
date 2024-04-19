/**
 * @param {number[][]} grid
 * @return {number}
 */



var islandPerimeter = function(grid) {
    let visited = new Set()

    function dfs(i , j  ) {
           if( i < 0 || i >= grid.length ||
             j < 0 || j >= grid[0].length 
             || grid[i][j] === 0) {
                return 1
            }
            let key = `${i},${j}`;
            if(visited.has(key)) { return 0; }
             
            visited.add(key);
                
            visited.add(i , j)
                
            let prime = dfs(i , j + 1)
           
            prime += dfs(i + 1 , j )
            prime += dfs(i , j - 1)
            prime += dfs(i - 1 , j)
            return prime
        
    }
    
    for( let i = 0 ; i < grid.length  ; i++ ) {
        for( let j = 0 ; j < grid[0].length  ; j++ ) {
            if (grid[i][j]) {
                return dfs(i , j )
            }
        
         }  
    }
  
        
    
};