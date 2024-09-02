/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
class UF {
    constructor(n) {
        this.ids = []
        this.sizes = []
        this.numComponent = n
        for (let i = 0; i < n; i++) {
            this.ids[i] = i
            this.sizes[i] = 1
        }
    }

    find(p) {
        let root = p
        while (root !== this.ids[root]) {
            root = this.ids[root]
        }

        while(p !== root) {
            let temp = this.ids[p]
            this.ids[p] = root
            p = this.ids[temp]
        }
        return root
    }
    union(p , q) {
        let rootP = this.find(p)
        let rootQ = this.find(q)

        if (rootP === rootQ) return false
        if (this.sizes[rootP] < this.sizes[rootQ]) {
            this.ids[rootP] = rootQ
            this.sizes[rootQ] += this.sizes[rootP]
        } else {
            this.ids[rootQ] = rootP
            this.sizes[rootP] += this.sizes[rootQ]
        }
        return true
    }
    count() {
        return this.numComponent
    }

    connected(p, q) {
        return this.find(p) === this.find(q)
    }
}
var validPath = function(n, edges, source, destination) {
    let uf = new UF(n)

    for(let i = 0; i < edges.length; i++) {
        let [x, y] = edges[i]
        uf.union(x, y)
    }

    if(uf.connected(source, destination)){
        return true
    }
    return false
};
