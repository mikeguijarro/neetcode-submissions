class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dict: Record<number, number> = {};

        for (const num of nums) {
            if (dict[num]) {
                dict[num] = dict[num] + 1;
            } else {
                dict[num] = 1;
            }
        }

        for (const key in dict) {
            if (dict[key] > 1) {
                return true
            }
        }

        return false;
    }
}
