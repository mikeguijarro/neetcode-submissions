class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums: number[]): number[] {
        const hash = {};
        const newNum: { value: number; frequency: number }[] = [];

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (hash[num]) {
                hash[num] = hash[num] + 1;
            } else {
                hash[num] = 1;
            }
        }

        for (const key in hash) {
            newNum.push({ frequency: hash[key], value: Number(key) });
        }

        newNum.sort((a, b) => {
            if(a.frequency < b.frequency) {
                return -1;
            } else if(a.frequency > b.frequency) {
                return +1;
            }

            if (a.value < b.value) {
                return +1;
            } else if(a.value > b.value) {
                return -1;
            }

            return 0
        });

        let numsCopy = newNum.flatMap((num)=> {
            return Array(num.frequency).fill(num.value);
        });

        return numsCopy
    }
}
