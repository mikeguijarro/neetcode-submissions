class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let arr: number[] = [];
        for (let i = 0; i < matrix.length; i++) {
            const val = matrix[i];
            arr = [...arr, ...val];
        }
        const val = arr.find((item) => item === target);
        if (val === undefined) {
            return false;
        }
        return true;
    }
}
