/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
    counter := 1
    dummy := &ListNode{Val: 0 , Next: head }
    slow := dummy
    fast := head 
    
    for counter <= n {
        fast = fast.Next
        counter++
    }
    
    
    for fast != nil {
        fast = fast.Next
        slow = slow.Next
    }
    slow.Next = slow.Next.Next
    return dummy.Next
    
}