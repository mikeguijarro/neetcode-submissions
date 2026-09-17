/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {

        if(head === null) {
            return null
        }

        let prevNode: ListNode = head;
        let currentNode: ListNode = head.next;

        head.next = null
        
        while (currentNode !== null) {
            let nextNode: ListNode | null = currentNode.next;
            currentNode.next = prevNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }
        // prevNode     currentNode     nextNode
        // 0            1               2
        // 1            2               3
        // 2            3               null
        // 3            null

        return prevNode;
    }
}
