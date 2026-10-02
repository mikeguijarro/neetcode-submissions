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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        return this.addTwoNumbersRec(l1, l2, 0);
    }

    addTwoNumbersRec(l1: ListNode | null, l2: ListNode | null, carryOver: number): ListNode {
        if (l1 === null && l2 === null && carryOver === 0) {
            return null;
        } else if (l1 === null && l2 === null && carryOver > 0) {
            return new ListNode(carryOver);
        }

        const sum: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryOver; // 18

        const units = sum % 10; // 8
        const teens = Math.floor((sum % 100) / 10); // 1

        const node = new ListNode(units);
        node.next = this.addTwoNumbersRec(l1 ? l1.next : null, l2 ? l2.next : null, teens);
        return node;
    }

    // 321 > 1 2 3
    // 654 > 4 5 6
    // 975 > 5 7 9

    // 11.      1 1
    // 999  > 9 9 9
    // 999  > 9 9 9
    // 1998 > 8 9 9 1

    // 9999999
    //    9999
}
