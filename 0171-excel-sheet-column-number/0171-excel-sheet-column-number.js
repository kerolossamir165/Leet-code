/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // the sequence will be 
    // the first 26 * 0 
    // the second 26 * 1 
    
    // and A is the 0 , AA is the Second iteration after completing the 26 char 
    // and the BA will be the third iteration 
    // so it will be 26 * position + char 
    // where postion is where we are in the sequence 
    
    let position = 0 
    
    for (let i = 0 ; i < columnTitle.length ; i++) {
        let char = columnTitle.charCodeAt(i) - 64
        
        position = 26 * position + char 
    }
    
     return position
 
    
};