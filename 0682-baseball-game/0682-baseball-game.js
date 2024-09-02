/**
 * @param {string[]} operations
 * @return {number}
*/

var calPoints = function(operations) {
    let stack = []
    let sum = 0;
    for(let i = 0; i < operations.length; i++) {
        switch(operations[i]) { 
            case 'C':
                stack.pop()
                break;
            case 'D':
                let top = stack.pop() 
                stack.push(top)
                stack.push(top * 2);
                break;
            case '+':
                let top1 = stack.pop();
                let top2 = stack.pop();
                stack.push(top2);
                stack.push(top1);
                stack.push(top1 + top2);
                        
                 break;
            default:
                 stack.push(parseInt(operations[i]));
            }
     }

          
    for (let element of stack) {
        sum += element
    }
    return sum;
    
};
