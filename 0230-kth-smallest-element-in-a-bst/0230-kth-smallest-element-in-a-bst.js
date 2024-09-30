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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = [] 
    
    traverse(root, result)
    
    return result[k - 1]
    
//     let count = 0
//     let result = [] 
//     let node = root
    
//     while(node !== null ) {
      
//         result.push(node.val)
        
//         node = node.left 
        
//         count++ 
        
//         if(k == count ) {
//             return node.val
//         }
//         node = node.right
//     }
};

function traverse(root, list ) {
    if (root !== null) {
        traverse(root.left , list)
        list.push(root.val)
        traverse(root.right , list)
    }
}