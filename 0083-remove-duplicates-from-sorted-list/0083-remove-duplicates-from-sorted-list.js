/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let currentPointer = head

    while(currentPointer !== null ) {
        let nextPointer = currentPointer.next

        while(nextPointer !== null && nextPointer.val === currentPointer.val) {
            nextPointer = nextPointer.next
        }

        currentPointer.next = nextPointer
        currentPointer = nextPointer
    }
    return head
};