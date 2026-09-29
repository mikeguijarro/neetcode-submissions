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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        return this.inorderTraversalRecursively(root);
    }

    inorderTraversalRecursively(root: TreeNode | null): number[] {
        if (root === null) {
            return [];
        }

        const left = this.inorderTraversalRecursively(root.left);
        const right = this.inorderTraversalRecursively(root.right);

        return [... left, root.val, ...right];
    }
}
