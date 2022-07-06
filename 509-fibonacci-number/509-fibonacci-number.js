/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // while(n <= 1 ) {
    //     return n
    // }
    // return fib(n - 1) + fib(n - 2)
 if(n == 0 || n == 1) return n;

  let dp = {};
  if (!n || dp[n]) return dp[n];

  return (dp[n] = fib(n - 1) + fib(n - 2));
    
};