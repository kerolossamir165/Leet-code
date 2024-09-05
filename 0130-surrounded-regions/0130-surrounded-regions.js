/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */




class UF {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = Array.from({ length: n }, () => 1);
    }
    find(p) {
        let root = p
        while (root !== this.parent[root]) {
            root = this.parent[root]
        }
        while(p !== root) {
            let temp = this.parent[root]
            this.parent[p] = root
            p = this.parent[temp]
        }
        return root
    }
    union (p , q) {
        let rootP = this.find(p)
        let rootQ = this.find(q)
        if (rootP === rootQ) return
        if (this.size[rootP] < this.size[rootQ]) {
            this.parent[rootP] = rootQ
            this.size[rootQ] += this.size[rootP]
        } else {
            this.parent[rootQ] = rootP
            this.size[rootP] += this.size[rootQ]
        }
    }
    connected(p, q) {
        return this.find(p) === this.find(q)
    }
}

let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]  
    // up, down, left, right
]

var solve = function(board) {
    let gridSize = board.length * board[0].length 
    let outer = gridSize 
    let uf = new UF(gridSize + 1)

    let getIndex = (row, col ) => {
        return row * board[0].length + col
    }
    let isValid = (row , col ) => {
        return row >= 0 && row < board.length && col >= 0 && col < board[0].length
    }
    for(let row = 0 ; row < board.length; row++){
        for(let col = 0 ; col < board[0].length ; col++){
            if(board[row][col] === 'O'){
                if(!(row === 0 || row === board.length - 1 || col === 0 || col === board[0].length - 1)){
                    for(let dir of directions){
                        let newRow = row + dir[0]
                        let newCol = col + dir[1]
                        if(isValid(newRow, newCol) && board[newRow][newCol] === 'O'){
                            uf.union(getIndex(row, col), getIndex(newRow, newCol))
                        }
                    }
                } else {
                    if(isValid(row, col)) {
                        uf.union(getIndex(row, col), outer)
                    }
                    
                }                  
            }


        }
    }  

    for(let row = 0 ; row < board.length; row++){
        for(let col = 0 ; col < board[0].length ; col++){ 

            if(!uf.connected(getIndex(row, col) , outer)) {
                board[row][col] = 'X'
            }

        }}
    
    return board
    
};

