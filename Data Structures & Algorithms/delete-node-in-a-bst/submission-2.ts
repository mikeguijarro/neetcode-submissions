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
                root = root.right;
            } else if(root.right === null) {
                root = root.left;
            } else {
                const minNode = this.findMinNode(root.right);
                root.val = minNode; 
                root.right = this.deleteNode(root.right, minNode);
            }
        }
        return root;
    }

    findMinNode(root: TreeNode | null) {
        let tmpNode = root;

        while(tmpNode !== null && tmpNode.left !== null ) {
            tmpNode = tmpNode.left;
        }

        return tmpNode.val;
    }
}
