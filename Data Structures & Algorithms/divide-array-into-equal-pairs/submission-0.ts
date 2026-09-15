class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums: number[]): boolean {
        const numsMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (numsMap.get(num)) {
                numsMap.set(num, numsMap.get(num) + 1);
            } else {
                numsMap.set(num, 1);
            }
        }

        let isValid = true;

        numsMap.forEach((value, key)=> {
            if(value % 2 !== 0) {
                isValid = false
            }
        });

        return isValid
    }
}
