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
    isTreeBalanced: boolean = true;
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        const maxLeafsDepth = this.isBalancedHandler(root, 0);

        return this.isTreeBalanced;
    }

    isBalancedHandler(root: TreeNode | null, depth: number) {
        if (root === null) {
            return depth;
        }

        depth++;
        const depthLeftArr = this.isBalancedHandler(root.left, depth);
        const depthRightArr = this.isBalancedHandler(root.right, depth);

        if(Math.abs(depthLeftArr - depthRightArr) > 1) {
            this.isTreeBalanced = false;
        }

        return Math.max(depthLeftArr, depthRightArr);
    }
}
