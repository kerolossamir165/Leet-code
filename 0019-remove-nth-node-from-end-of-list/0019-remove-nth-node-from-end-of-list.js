/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let counter = 1
    let dummy = new ListNode(0 , head)
    let slow = dummy 
    let fast = head 

    while(counter <= n ) {
        fast = fast.next 
        counter++
    }

    while(fast !== null ) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next 
    return dummy.next
};