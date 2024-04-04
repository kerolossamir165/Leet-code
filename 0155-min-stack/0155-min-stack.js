
var MinStack = function() {
    this.stack = {}
    this.length = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack[this.length] = val
    this.length++
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.length) {
        let last =  this.stack[this.length - 1]
          delete this.stack[this.length - 1]
            this.length--
    }
    
  
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.length) {
      return this.stack[this.length - 1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.length) {
       let arr = Object.values(this.stack);
        return Math.min(...arr);   
    }
  
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */