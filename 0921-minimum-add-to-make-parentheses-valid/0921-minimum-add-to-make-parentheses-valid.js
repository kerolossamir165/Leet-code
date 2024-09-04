/**
 * @param {string} s
 * @return {number}
 */

class Stack {
    constructor() {
        this.stack = [];
        this.sizeStack = 0;
    }
    
    push(value) {
        this.stack.push(value);
        this.sizeStack++;
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        this.sizeStack--;
        return this.stack.pop();
    }
    isEmpty() {
        return this.sizeStack === 0;
    }
    peek(){
        return this.isEmpty()? null : this.stack[this.sizeStack - 1];
    }
    size() {
        return this.sizeStack;
    }
}
var minAddToMakeValid = function(s) {
    
    let stack = new Stack() 
    for( let i = 0 ; i < s.length ; i++ ) {
        if(s[i] === "(") {
            stack.push(s[i])
        }else if (!stack.isEmpty() && stack.peek() === "(" && s[i] === ")") {
            stack.pop()
        }else {
            stack.push(s[i])
        }
    }
    return stack.size()
    
};