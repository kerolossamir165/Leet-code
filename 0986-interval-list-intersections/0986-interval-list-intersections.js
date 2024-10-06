/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */

class IntervalTree {
    constructor(value){
        this.interval = value
        this.max = value[1]
        this.left = null;               
        this.right = null;   
    }
}

class SearchInterval {
    constructor(){
        this.root = null
    }
    
    insert(interval , node = this.root) {
        if (node === null )  {
            return new IntervalTree(interval)
        }
        
        let [low , high] = interval
        
        if(low < node.interval[0]) {
            node.left = this.insert(interval , node.left)
        }else {
             node.right = this.insert(interval , node.right)
        }
        
        node.max =  Math.max(node.max, high);
        return node
    }
    
    searchOverlap(query, node = this.root, results = []) {
        if (node === null) return;

        const [low, high] = query;
        if(this.isOverlap(query, node.interval)){
            const overlapStart = Math.max(low, node.interval[0]);
            const overlapEnd = Math.min(high, node.interval[1]);
            results.push([overlapStart, overlapEnd]);
         }
        
        if (node.left !== null && node.left.max >= low) {
            this.searchOverlap(query, node.left, results);
        }

        this.searchOverlap(query, node.right, results);
        
        
    }
    isOverlap(query, interval) {
        return query[0] <= interval[1] && interval[0] <= query[1];
    }
}


var intervalIntersection = function(firstList, secondList) {
       let result = [];

    const tree = new SearchInterval();
    
      firstList.forEach(interval => tree.root = tree.insert(interval));
    
    for(let query of secondList) {
        tree.searchOverlap(query, tree.root, result);
    }
    return result
};