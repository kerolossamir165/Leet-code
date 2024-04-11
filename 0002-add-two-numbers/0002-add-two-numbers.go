/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    dummy := &ListNode{Val: 0}
    current := dummy
    curry := 0
    firstList := l1
    secondList := l2
    
    for firstList != nil || secondList != nil || curry != 0 {
        var value1 , value2 int
        if firstList != nil {
            value1 = firstList.Val
        } else {
            value1 = 0
        }
        
         if secondList != nil {
            value2 = secondList.Val
         } else {
            value2 = 0 
         }
        
        sum := value1 + value2 + curry
        
        newValue := sum % 10 
        
        newNode := &ListNode{Val: newValue}
        
        current.Next = newNode
        current = newNode
        
        curry = sum / 10 
        if firstList != nil {
                   firstList = firstList.Next  
        } else {
                    firstList = nil
        }
        
        if secondList != nil {
                   secondList = secondList.Next  
        } else {
                    secondList = nil
        }

        
    }
    return dummy.Next
    
}