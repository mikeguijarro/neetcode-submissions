/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    num: number;
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        this.dfsKthSmallest(root, k, 0);
        return this.num;
    }

    dfsKthSmallest(root: TreeNode | null, k: number, i: number): number {
        if (root === null) {
            return 0;
        }

        const leftChild = this.dfsKthSmallest(root.left, k, i);
        const current = Math.max(leftChild, i) + 1;
        if(current === k) {
            this.num = root.val;
        }
        const rightChild = this.dfsKthSmallest(root.right, k, current);
        
        return Math.max(leftChild, current, rightChild);
    }
}
