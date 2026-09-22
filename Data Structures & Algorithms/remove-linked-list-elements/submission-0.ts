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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head: ListNode | null, val: number): ListNode {
        return this.removeElementsRecursively(head, val);
    }

    removeElementsRecursively(node: ListNode | null, val: number): ListNode | null {
        if(node === null) {
            return null;
        }

        if(node.val === val) {
            return this.removeElementsRecursively(node.next, val);
        }

        node.next = this.removeElementsRecursively(node.next, val);

        return node;
    }
}
