/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func dfs (current *TreeNode , num int ) int{
    if current == nil {
        return 0 
    }
    
    num = num * 10 + current.Val
    
    if current.Left == nil && current.Right == nil {
        return num 
    }
    
    return dfs(current.Left , num ) + dfs(current.Right , num )
}

func sumNumbers(root *TreeNode) int {
    return dfs(root , 0)
    
}