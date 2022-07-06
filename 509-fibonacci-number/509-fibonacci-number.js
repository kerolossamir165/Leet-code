/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // while(n <= 1 ) {
    //     return n
    // }
    // return fib(n - 1) + fib(n - 2)
    
  let dp = { 0: 0, 1: 1 };
  if (!n || dp[n]) return dp[n];

  return (dp[n] = fib(n - 1) + fib(n - 2));
    
};