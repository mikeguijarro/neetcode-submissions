class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums: number[]): boolean {
        if(nums[0] < nums[nums.length - 1]) {
            return this.isMonotonicIncreasing(nums)
        } else {
            return this.isMonotonicDecreasing(nums)
        }
    }

    isMonotonicIncreasing(nums: number[]): boolean {
        if (nums.length === 0) {
            return true;
        }

        const curr = nums.shift();
        
        if (curr > nums[0]) {
            return false;
        }

        return this.isMonotonicIncreasing(nums);
    }

    isMonotonicDecreasing(nums: number[]): boolean {
        if (nums.length === 0) {
            return true;
        }

        const curr = nums.shift();
        
        if (curr < nums[0]) {
            return false;
        }

        return this.isMonotonicDecreasing(nums);
    }
}
