/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (!head || !head.next || left == right) {
        return head
    }
    
    let dummy = new ListNode(0);
    dummy.next = head
    
    let prev = dummy
    let current = head
    
    // Traverse to the left position
    for (let i = 1; i < left; i++) {
        prev = current
        current = current.next
    }
    
    let reversedTail = current
    let reversedPrev = null
    
    // Reverse the nodes from left to right
    for (let i = left; i <= right; i++) {
        let next = current.next
        current.next = reversedPrev
        reversedPrev = current
        current = next
    }
    
    // Connect the reversed portion back to the original list
    reversedTail.next = current
    prev.next = reversedPrev
    
    return dummy.next
 
};