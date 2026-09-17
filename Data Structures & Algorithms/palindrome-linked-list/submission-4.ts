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
     * @return {boolean}
     */
    isPalindrome(head: ListNode | null): boolean {
        
        let slowNode: ListNode | null = head;
        let fastNode: ListNode | null = head;

        while (fastNode !== null && fastNode.next !== null) {
            slowNode = slowNode.next;
            fastNode = fastNode.next.next;
        }

        // Slow node is in the center   
        let otherEnd = this.reverseLinkedList(slowNode);

        while(otherEnd !== null) {
            if(otherEnd.val !== head.val) {
                return false
            }

            head = head.next;
            otherEnd = otherEnd.next;
        }

        return true;
    }

    reverseLinkedList(node: ListNode | null) {
        let prevNode: ListNode | null = null;
        let currNode: ListNode | null = node;

        while(currNode !== null) {
            const nextNode: ListNode | null = currNode.next;

            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }

        return prevNode;
    }
}
