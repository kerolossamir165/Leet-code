/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function height(root) {
    if (root == null)
        return 0;
    else {
        var lheight = height(root.left);
        var rheight = height(root.right);
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}
function isSameTreeHelper(p ,q) {
    if (p == null && q == null)
        return true;
    if (p == null || q == null)
        return false;
    if (p.val!== q.val)
        return false;
    return isSameTreeHelper(p.left, q.left) && isSameTreeHelper(p.right, q.right);
    
}
var isSameTree = function(p, q) {
    let hp = height(p)
    let hq = height(q)
    if (hp === hq) {
        return isSameTreeHelper(p, q)
    } else {
        return false
    }
    
};

