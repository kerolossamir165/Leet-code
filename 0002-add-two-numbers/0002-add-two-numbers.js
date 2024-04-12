/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0)
    let pointer = dummy   
    let curry = 0

    let firstList  = l1
     let secondList = l2

    while (firstList !== null || secondList !== null || curry !== 0) {

        valueOne = firstList !== null ?  firstList.val : 0
        valueTwo = secondList !== null ? secondList.val : 0

        let sum = valueOne + valueTwo + curry

        let newValue = sum % 10
        let newNode = new ListNode(newValue)
        pointer.next = newNode
        pointer = newNode
        
        curry = Math.floor(sum / 10)

       
        firstList = firstList !== null ? firstList.next : null
       
        secondList = secondList !== null ? secondList.next : null
        
    } 
    return dummy.next
};