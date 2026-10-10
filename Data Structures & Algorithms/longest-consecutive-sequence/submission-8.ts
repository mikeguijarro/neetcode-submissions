class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {

        nums.sort((a, b) => a - b);

        nums = nums.filter((item, i, arr) => {
            if (i === 0) {
                return true;
            }

            if (arr[i] === arr[i - 1]) {
                return false;
            }
            return true;
        });

        if (nums.length === 0) {
            return 0;
        } else if (nums.length === 1 || nums.length === 2 && nums[0] === nums[1]) {
            return 1;
        }

        console.log(nums);

        const arr: number[][] = [];
        let index = 0;
        for (let i = 1; i < nums.length; i++) {
            const j = i - 1;
            if (nums[j] + 1 === nums[i]) {
                if (i === nums.length - 1) {
                    arr.push(nums.slice(index, undefined));
                }
                continue;
            }
            arr.push(nums.slice(index, i));
            index = i;
        }
        if(arr.length == 1) {

        }
        let biggestLength = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > biggestLength) {
                biggestLength = arr[i].length;
            }
        }
        return biggestLength;
    }
}
