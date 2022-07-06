class Solution {
    int dp[31] = {0, 1};
public:
    int fib(int n) {
        // base case: n == 0 or n already found
        if (!n || dp[n]) return dp[n];
        // general case, with memoisation
        return dp[n] = fib(n - 1) + fib(n - 2);
    }
};