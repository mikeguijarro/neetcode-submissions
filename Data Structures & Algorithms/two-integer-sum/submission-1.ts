class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const dict: Record<number, number[]> = {}; // <number, index>
        // 7
        // [3,4,5,6]
        // {4: 0
        // }
        for (let i = 0; i < nums.length; i++) {
            
            const num = nums[i];
            
            if (i > 0) {
                const result = target - num; 
                if (dict[result]) {
                    return [dict[result][0], i]
                }
            }

            if (dict[num] === undefined) {
                dict[num] = [i];
            } else {
                dict[num].push(i);
            }
        }
    }
}
