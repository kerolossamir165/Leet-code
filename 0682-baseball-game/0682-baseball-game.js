/**
 * @param {string[]} operations
 * @return {number}
*/

// var calPoints = function(operations) {
//     let stack = []
//     let sum = 0;
//     for(let i = 0; i < operations.length; i++) {
//         switch(operations[i]) { 
//             case 'C':
//                 stack.pop()
//                 break;
//             case 'D':
//                 let top = stack.pop() 
//                 stack.push(top)
//                 stack.push(top * 2);
//                 break;
//             case '+':
//                 let top1 = stack.pop();
//                 let top2 = stack.pop();
//                 stack.push(top2);
//                 stack.push(top1);
//                 stack.push(top1 + top2);
                        
//                  break;
//             default:
//                  stack.push(parseInt(operations[i]));
//             }
//      }

          
//     for (let element of stack) {
//         sum += element
//     }
//     return sum;
    
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }

    push(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }

    pop() {
        if(!this.head) return null
        let poppedValue = this.head.value
        this.head = this.head.next
        return poppedValue
    }
}
let calPoints = (operations)=> {
    let stack = new Stack()
    let score = 0

    for (let i = 0 ; i < operations.length; i++) {
        switch (operations[i]) { 
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

        while (stack.head) {
            score += stack.pop()
        }
        return score
}