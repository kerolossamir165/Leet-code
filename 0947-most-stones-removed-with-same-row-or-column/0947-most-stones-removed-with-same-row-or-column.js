/**
 * @param {number[][]} stones
 * @return {number}
 */

class Uf {
    sizes = []
    _ids = []
    constructor(n) {
        this.numComponents = n 
        for (let i = 0 ; i < n ; i++) {
            this._ids[i] = i
            this.sizes[i] = 1
        }
     }
        find (x) {
            let root = x 
            
            while (root !== this._ids[root]) {
                root = this._ids[root]
            }
            
            while (x !== this._ids[root]) {
                let temp = this._ids[root]
                this._ids[root] = root
                x = temp
            }
            return root 
        }
        
        union( p,  q ) {
            let rootP = this.find(p);
            let rootQ = this.find(q);
            if (rootP !== rootQ) {
                if(this.sizes[rootP] > this.sizes[rootQ]) { 
                    this._ids[rootQ] = rootP
                    this.sizes[rootP] += this.sizes[rootQ]
                } else if(this.sizes[rootP] < this.sizes[rootQ]) {
                    this._ids[rootP] = rootQ
                    this.sizes[rootQ] += this.sizes[rootP]
                }else {
                    this._ids[rootP] = rootQ;
                    this.sizes[rootQ] += 1;
                }
                this.numComponents--  
            }
        }
    }



var removeStones = function(stones) {
    let numStones = stones.length
    let unionFind = new Uf(numStones)

    for (let i = 0 ; i < numStones ; i++)  {
         for (let j = 0 ; j < numStones ; j++)  {
            if(stones[i][0] === stones[j][0] || stones[i][1] === stones[j][1] ) {
                unionFind.union(i ,j)
             }
         }
    }
    return  numStones - unionFind.numComponents 
    
};