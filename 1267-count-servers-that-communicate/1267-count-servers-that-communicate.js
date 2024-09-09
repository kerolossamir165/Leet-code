/**
 * @param {number[][]} grid
 * @return {number}
 */

class Uf {
    _sizes = [];
    _ids = [];
    _numberOfComponents = 0;

    constructor(N) {
        for (let i = 0; i < N; i++) {
            this._ids[i] = i;
            this._sizes[i] = 1;
        }
        this._numberOfComponents = N;
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
     
        
        if (pRoot === qRoot) return 


        if (this._sizes[pRoot] > this._sizes[qRoot]) {
            this._ids[qRoot] = pRoot;
            this._sizes[pRoot] += this._sizes[qRoot];
            this._sizes[qRoot] = 1
        } else {
            this._ids[pRoot] = qRoot;
            this._sizes[qRoot] += this._sizes[pRoot];
            this._sizes[pRoot] = 1
        }
        this._numberOfComponents--;;
    }

    find(p) {
        let root = this._ids[p]
        while (root !== this._ids[root]) {
            root = this._ids[root];
        }
        // Compress the path
        while (p !== root) {
            let next = this._ids[p];
            this._ids[p] = root;
            p = this._ids[next];
        }
        return root;
    }
}


// with union find 
var countServers2 = function(grid) {
   let gridSize = grid.length * grid[0].length 
    let servers = new Uf(gridSize)
    let count = 0


    function getIndex (row, col) {
        return row * grid[0].length + col
    }
  
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) { 
            
            if(grid[i][j]) {
                let index = getIndex(i ,j)
                 // Get all cells in the same column (j)
                for (let row = 0; row < grid.length; row++) {
                    
                    if(grid[row][j] &&  i !== row) {
                        let cell = getIndex( row , j)
                       
                        servers.union(cell ,index )
                    }
                }

                // Get all cells in the same row (i)
                for (let col = 0; col < grid[0].length ; col++) {
                    if(grid[i][col] && j !== col) {
                        let cell = getIndex( i , col)
                            servers.union(cell , index )
                    }                                           
                }  
            }
            
        }
    }
    
    for (let rank of servers._sizes) {
        if(rank > 1) {
            count += rank
        }
    }
    
    return count 
};


// with 2 loops 
function checkOneCell (grid, i , j ) {
    for (let row = 0; row < grid.length; row++) {
                    
        if(grid[row][j] &&  i !== row) {                                   
           return 1
        }
    }

    // Get all cells in the same row (i)
    for (let col = 0; col < grid[0].length ; col++) {
        if(grid[i][col] && j !== col) {
            return 1
        }                                           
    }  
    return 0
}

var countServers = function(grid) {
   
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) { 
            if(grid[i][j]) {
                count += checkOneCell(grid , i ,j)

            }
            
        }
    }
    

    return count 
};