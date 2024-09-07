/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = ""
    let count = 0

    for(let i = 0; i < s.length; i++) { 
        if(s[i] === "(") {
            if(count > 0 ) {
                ans += s[i]
            }
            count++
        } else if(s[i] === ")") {
            count--
            if(count > 0) {
                ans += s[i]
            }
        }
    }
    return ans 
};