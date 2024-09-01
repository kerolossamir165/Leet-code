/**
 * @param {string[]} grid
 * @return {number}
 */


class Uf {
    _sizes = [];
    _ids = [];
    _numberOfComponents = 0;

    constructor(N) {
        for (let i = 0; i < N; i++) {
            this._ids[i] = i;
            this._sizes[i] = 0;
        }
        this._numberOfComponents = N;
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) {
            return;
        }
        // weighing Approach
        if (this._sizes[pRoot] > this._sizes[qRoot]) {
            this._ids[qRoot] = pRoot;
            this._sizes[pRoot] += this._sizes[qRoot];
        } else {
            this._ids[pRoot] = qRoot;
            this._sizes[qRoot] += this._sizes[pRoot];
        }
        this._numberOfComponents--;
    }

    find(p) {
        let root = p
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

    count() {
        return this._numberOfComponents;
    }
}


let SIDES = 4

let regionsBySlashes = function (grid) {
    let n = grid.length
    let elementToUnion = SIDES * n * n
    let uf = new Uf(elementToUnion)

    function isValid(element) {
        return element >= 0 && element < elementToUnion
    }
    
    function getIndex(row, col) {
        if(row >= 0 && row < n && col >= 0 && col < n) {
            return SIDES * (row * n + col)
        }
        return -1
    }
    

    for(let row = 0 ; row < n ; row++) {
        for (let col =0 ; col < n ; col++) { 
            let divider = grid[row][col]
            
            // is the value in this cell (Triangle in the recatngle )
            let index = getIndex(row, col)
            
           
            if(divider !== "/") {
                // merge the two items that beside each other and not splited by the slash in the cell 

                uf.union(index + 0 , index + 1);
                uf.union(index + 3, index + 2);
               

              
            }
            if(divider !== "\\") {
                // merge the two items that beside each other and not splited by the slash in the cell 
               uf.union(index + 0 , index + 3);
               uf.union(index + 2, index + 1);
              
            }
               

             // Union with right cell

            if ( isValid(getIndex(row , col + 1))) {
                 // get the right 
                    // index + 1 ===> index will be (1 , 9) so plus 1 mean move the index to right 
                    // se we have 4 direction 0 - top , 1 - right , 2 - bottom , 3 - left 
                  // index (0 + 1 ) and (8 + 1 ) will be  value 1 , 9
                // getIndex(row , col + 1)  will give us 4 , 12 and we want to get the left value to merge it with the                      right value that we get from index + 1
                //  4 , 12 + 3  ==>   7 , 15 
                // will union (1 , 7) and (9 , 15)  
                
                uf.union(index + 1, getIndex(row, col + 1) + 3);
              }
            
        
              // Union with bottom cell
              if (isValid(getIndex(row+1 , col ))) {
                  // get the bottom 
                    // index + 2 ===> index will be (0 , 4) so plus 2 mean move the index to bottom 
                    // se we have 4 direction 0 - top , 1 - right , 2 - bottom , 3 - left 
                  // index (0 + 2 ) and (4 + 2 ) will be  value 2 , 6 
                // getIndex(row+1, col) 8 , 12  
                uf.union(index + 2,getIndex(row+1, col));
              }
            

            
        }
    }
    return uf.count()

    
}