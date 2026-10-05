class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict: Record<number, number> = {}; // <number, index>

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (i > 0) {
                const result = target - num;
                if (dict[result] !== undefined) {
                    return [dict[result], i];
                }
            }

            if (dict[num] === undefined) {
                dict[num] = i;
            }
        }
        console.log(dict);
        return [];
    }
}
