/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // while(n <= 1 ) {
    //     return n
    // }
    // return fib(n - 1) + fib(n - 2)
    /////////////////////////////////////////////////
//  if(n == 0 || n == 1) return n;

//   let dp = {};
//   if (!n || dp[n]) return dp[n];

//   return (dp[n] = fib(n - 1) + fib(n - 2));
    //////////////////////////////
    
    if(n == 0 || n == 1) return n;
    let arr = [0,1];
    for(let i = 2;i<n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n-1]+arr[n-2];
    
};