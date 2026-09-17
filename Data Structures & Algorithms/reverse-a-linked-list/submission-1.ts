/**
 * Definition for singly-linked list.
 *
class ListNode {
    val: number;
    next: ListNode;
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
**/
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        if (head === null) {
            return null
        }
        
        let currentNode: ListNode | null = head
        let tempNext: ListNode | null = currentNode.next;

        currentNode.next = null;
        
        while (tempNext !== null) {
            let tempNextNext: ListNode | null = tempNext ? tempNext.next :  null;
            
            tempNext.next = currentNode;

            currentNode = tempNext;
            tempNext = tempNextNext;
        }
        
        return currentNode;
    }
}
