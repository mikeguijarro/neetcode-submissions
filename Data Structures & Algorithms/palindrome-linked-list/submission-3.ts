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
        let reversedHead = this.reverseLinkedList(structuredClone(head));

        
        while(head !== null) {
            console.log('revHead',reversedHead.val)
            console.log('head',head.val)
            if(reversedHead.val !== head.val) {
                return false;
            }

            head = head.next;
            reversedHead = reversedHead.next;
        }

        return true;
    }

    reverseLinkedList(head: ListNode | null) {
        let prevNode: ListNode | null = null
        let currentNode: ListNode | null = head;

        while(currentNode !== null) {
            const nextNode: ListNode | null = currentNode.next;

            currentNode.next = prevNode;

            prevNode = currentNode;
            currentNode = nextNode;
        }

        return prevNode;
    }
}
