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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root === null ) {
        let newNode = new TreeNode(val)
        return newNode
    }
    
    let com = compare(val , root.val)
    
    if (com < 0 ) {
        root.left = insertIntoBST(root.left , val)
    } else if (com > 0 ) {
        root.right = insertIntoBST(root.right , val)
    }else {
        root.val = val
    }
    return root
};

function compare(x , y) {
    if(x > y) {
        return 1 
    } else if (x < y) {
        return -1
    } else {
        return 0
    }
}