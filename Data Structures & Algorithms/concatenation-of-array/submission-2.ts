class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const concatNums = [];
        for (let i = 0; i < nums.length; i++) {
            concatNums[i] = nums[i];
            concatNums[i + nums.length] = nums[i];
        }

        return concatNums
    }
}
