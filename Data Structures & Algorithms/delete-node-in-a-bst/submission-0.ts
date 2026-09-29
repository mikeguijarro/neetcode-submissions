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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root: TreeNode | null, key: number): TreeNode {
        if(root === null) {
            return null;
        }
        
        if(key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if(key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if(root.left === null) {
                return root.right;
            } else if(root.right === null) {
                return root.left;
            } else {
                const minVal = this.minValNode(root.right);
                root.val = minVal;
                root.right = this.deleteNode(root.right, minVal)
            }
        }
        // Case 1: if 0 or 1 child node

        // Case 2: if 2 children nodes

        return root;
    }

    searchNode(root: TreeNode | null, val: number): boolean {
        if(val < root.val) {
            return this.searchNode(root.left, val);
        } else if(val > root.val) {
            return this.searchNode(root.right, val);
        } else if(val === root.val) {
            return true;
        }

        return false; 
    }

    minValNode(root: TreeNode | null): number {
        if(root !== null && root.left !== null) {
            return this.minValNode(root.left);
        }

        return root.val;
    }
}
