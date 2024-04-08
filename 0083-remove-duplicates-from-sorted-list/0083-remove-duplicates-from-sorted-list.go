/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    currentPointer := head
    
    for currentPointer != nil  {
        nextPointer := currentPointer.Next 
        
        for nextPointer != nil && nextPointer.Val == currentPointer.Val {
            nextPointer = nextPointer.Next
        }
        currentPointer.Next = nextPointer
        currentPointer = nextPointer
    }
    return head
}