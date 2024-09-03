/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }
    
    push(value) {
        this.stack.push(value);
        this.size++;
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        this.size--;
        return this.stack.pop();
    }
    isEmpty() {
        return this.size === 0;
    }
    peek(){
        return this.isEmpty()? null : this.stack[this.size - 1];
    }
}

// each index of the temperatures array represents a day 
// so you make stack of days and compare the temperature of the day  with the temperature of the days after 
// and minus them from each other and replace it in the index of the day 


var dailyTemperatures = function(temperatures) {
     let dayStack = new Stack()
     let n = temperatures.length
    let result = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
     
        while( !dayStack.isEmpty() && temperatures[i] > temperatures[dayStack.peek()] ) {
            let temp = dayStack.pop()   
            result[temp] = i  - temp
        }
        dayStack.push(i); 
    }
     return result
};



let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

console.log(dailyTemperatures(temperatures)) // [1, 1, 4, 2, 1, 1, 0, 0]