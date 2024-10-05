/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let root = null 
    
    root = sortedBST(nums, 0 , nums.length - 1)
    return root
};

function sortedBST(arr , start , end ) {
    if(start > end ) return null 
    
    let mid = Math.floor((start + end ) / 2 )
        
    let node = new TreeNode(arr[mid]) 
    
    node.left = sortedBST(arr , start , mid - 1)
    node.right = sortedBST(arr , mid + 1, end )
    
    return node
    
}