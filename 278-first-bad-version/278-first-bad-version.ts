/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    
     return function(n:number): number {
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