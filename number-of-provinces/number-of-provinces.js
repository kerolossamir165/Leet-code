/**
 * @param {number[][]} isConnected
 * @return {number}
 */


class Uf {
    _ids = [];
    sizes = [];
    constructor(n) {
        this.numComponents = n;
        for (let i = 0; i < n; i++) {
            this._ids[i] = i;
            this.sizes[i] = 0
        }
    }
    find(p){
        let root = p 
        while(root !== this._ids[root]) {
        //  console.log(root)
          root = this._ids[root]
        }

        while( p !== this._ids[root]) {
            let temp = this._ids[p]
            this._ids[p] = root
            p = temp
        }


        return root
    }

    union(p,q) {
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

    connected(x , y ) {
        return this.find(x) === this.find(y)
    }
}

var findCircleNum = function(isConnected) {
    let uf = new Uf(isConnected.length)
    
    for(let i = 0; i < isConnected.length; i++) {
        for(let j = 0; j < isConnected[i].length; j++) {
            if(isConnected[i][j] === 1) {
                uf.union(i,j)
            }
        }
    }
    return uf.numComponents
    
};