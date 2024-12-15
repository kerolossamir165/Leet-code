/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trusts = new Array(n + 1 ).fill(0)
    let trusted = new Array(n + 1 ).fill(0)
    
    trust.forEach(([a,b]) => {
        trusts[a]++
        trusted[b]++
    })
    
    for(let i = 1 ; i <= n ; i++) {
        if(trusts[i]=== 0 && trusted[i] === n - 1) {
            return i
        }
    }
    return -1

    
};