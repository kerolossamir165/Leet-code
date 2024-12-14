/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    let rows = grid.length
    let cols = grid[0].length 
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    let direction = [
        [0, 1],  // right
        [1, 0],  // down
        [0, -1], // left
        [-1, 0]  // up
    ];
    
    function dfs(x, y , parentX, parentY, element) {
        if(visited[x][y]) return true 
        visited[x][y] = true 
        
        for(const [dr, dc] of direction) {
            let newRow = x + dr
            let newCol = y + dc 
            
            if(newRow >= 0 && newRow < rows && newCol >=0 && newCol < cols && grid[newRow][newCol] === element) {
                
                if(newRow === parentX && newCol === parentY) continue
                
                if(dfs(newRow, newCol , x, y , element)) return true
            }
        }
        return false
    }
        
    for(let i = 0 ; i < rows ; i++  ) {
        for(let j = 0 ; j < cols ; j++ ) {
            if(!visited[i][j]) {
                if(dfs(i, j , -1 , -1 , grid[i][j])) return true
            }
        }
    }
        return false
    
};