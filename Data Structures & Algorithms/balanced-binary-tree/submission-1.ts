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
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        return this.dfsIsBalanced(root).isBalanced;
    }

    dfsIsBalanced(root: TreeNode | null): { isBalanced: boolean; depth: number } {
        if (root === null) {
            return { depth: 1, isBalanced: true };
        }

        const left = this.dfsIsBalanced(root.left);
        const right = this.dfsIsBalanced(root.right);

        const isBalanced =
            left.isBalanced && right.isBalanced && Math.abs(left.depth - right.depth) <= 1;

        return { depth: Math.max(left.depth, right.depth) + 1, isBalanced: isBalanced };
    }
}
