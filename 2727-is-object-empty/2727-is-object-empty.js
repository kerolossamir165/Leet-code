/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    if(Array.isArray(obj)) {
        return obj.length === 0 
    } else {
        let values =  Object.entries(obj)
        return  values.length === 0 
    }
    
};