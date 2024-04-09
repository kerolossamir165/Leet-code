/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
    fastNode := head
    slowNode := head 
    
    for fastNode != nil && fastNode.Next != nil {
        fastNode = fastNode.Next.Next
        slowNode = slowNode.Next
    }
    return slowNode
    
}