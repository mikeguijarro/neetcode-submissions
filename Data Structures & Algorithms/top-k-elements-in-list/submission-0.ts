class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const dict: Record<number, { num: number; count: number }> = {}; // number

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (dict[num] === undefined) {
                dict[num] = { num: num, count: 1 };
            } else {
                dict[num].count = dict[num].count + 1;
            }
        }

        const arr = Object.values(dict)
            .sort((a, b) => a.count - b.count)
            .reverse();
        return arr.slice(0, k).map((item) => item.num);
    }
}
