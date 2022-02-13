/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0 
        let end = n
        let val 
        
        if(n === 1 ) {
            val = 1
        }
        
        while(start <= end ) {
           let middle = Math.floor((start + end ) / 2)

            if(isBadVersion(middle) && !isBadVersion(middle - 1)) {
                val = middle
                break;
            } else if (!isBadVersion(middle)) {
                start = middle + 1 
            } else {
                end = middle - 1 
            }   
        }
        return val
        
    };
}; 