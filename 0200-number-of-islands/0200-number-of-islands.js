/**
 * @param {character[][]} grid
 * @return {number}
 */
class Uf {
    constructor(n) {
        this._ids = []; 
        this.sizes = [];
        this.numComponents = n
        for (let i = 0; i < n; i++) {
            this._ids[i] = i;
            this.sizes[i] = 1;
        }
    }
    find(x) {
        let root = x 
        while(root !== this._ids[root]) {
            root = this._ids[root]
        }

        while(x !== root) {
            let oldRoot = this._ids[x]
            this._ids[x] = root
            x = this._ids[oldRoot]
        }
        return root
    }

    union(p , q ) {
        let rootP = this.find(p)
        let rootQ = this.find(q)
        if(rootP === rootQ) return

        if(this.sizes[rootP] < this.sizes[rootQ]) {
            this._ids[rootP] = rootQ
            this.sizes[rootQ] += this.sizes[rootP]
        } else {
            this._ids[rootQ] = rootP
            this.sizes[rootP] += this.sizes[rootQ]
        }
        this.numComponents--
    }

    isConnected(x, y) {
        return this.find(x) === this.find(y)
    }

    numComponent() {
        return this.numComponents
    }
}


let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
]
var numIslands = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let countOfNotIsland = 0
    let uf = new Uf(m * n)

    function isValid(row, col) {
      
          return row >= 0 && row < m && col >= 0 && col < n
    }
   
    function getIndex(row, col) {
      
          return row * n + col
    }
    
    for(let i = 0 ; i < m ; i++) {
        for (let j = 0 ; j < n ; j++) {
            if(grid[i][j] === '1') {
                let index = getIndex(i, j)
               for(let dir of directions) {
                    let x = i + dir[0]
                    let y = j + dir[1]
                    let neighbor = getIndex(x, y)
                    
                    if(isValid(x, y ) && grid[x][y] === '1') {
                        uf.union(i * n + j, x * n + y)
                    }
                }
              
            }else {
                countOfNotIsland++
            }
        }
    }

 
    

    return uf.numComponent() - countOfNotIsland
};