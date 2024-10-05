/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let list = []
    let root = null
    
    while(head !== null ) {
        
        list.push(head.val)
        head = head.next
    }
    
    root = sortedArr(list, 0 , list.length - 1)
    return root
    
};

function sortedArr(arr , start , end ) {
    if(start > end ) return null 
    
    let mid = Math.floor((start + end ) / 2 )
    let node = new TreeNode(arr[mid])
    
    node.left = sortedArr(arr, start , mid - 1)
    node.right = sortedArr(arr , mid  + 1 , end )
    return node 
}