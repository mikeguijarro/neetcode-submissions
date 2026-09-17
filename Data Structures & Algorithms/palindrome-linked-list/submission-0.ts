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
        const strArr: string[] = [];
        let tail = head;
        while (tail !== null) {
            strArr.push(tail.val);
            tail = tail.next;
        }

        for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] !== strArr[strArr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}
