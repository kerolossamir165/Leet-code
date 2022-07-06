/**
 * @param {number} n
 * @return {number}
 */

// var fibMemo = function(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n === 0 || n === 1) return n;
//   memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
//   return memo[n];
// }

var fib = function(n) {
    while(n <= 1 ) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
    /////////////////////////////////////////////////
//  if(n == 0 || n == 1) return n;

//   let dp = {};
//   if (!n || dp[n]) return dp[n];

//   return (dp[n] = fib(n - 1) + fib(n - 2));
    //////////////////////////////
    
    // return fibMemo(n)
    
};