/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function dfs(curr, num) {
    if(!curr) return 0  
    
    num = num * 10  + curr.val
    
    if( !curr.left && !curr.right ) return num 
    return dfs(curr.left , num ) + dfs(curr.right , num)
}

var sumNumbers = function(root) {
    
        return dfs(root , 0)
    
};