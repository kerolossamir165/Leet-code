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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    
    let result = [] 
    let newRoot = null 
    traverse(root , result)
    
   newRoot = sortedArrayToBST(result , 0 , result.length - 1)
    
    return newRoot
     
};

function traverse(node ,list) {
    if(node !== null ){
        traverse(node.left , list)
        list.push(node.val)
        traverse(node.right , list)
    }
}


function sortedArrayToBST(arr, start, end)
{
    if (start > end)
    {
        return null;
    }
    var mid = Math.floor((start + end) / 2);
    var node = new TreeNode(arr[mid]);

    node.left = sortedArrayToBST(arr, start, mid - 1);

    node.right = sortedArrayToBST(arr, mid + 1, end);
    return node;
}