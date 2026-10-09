class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const numsMult = this.getMultArr(nums);
        const numsMultRev = this.getMultArr([...nums].reverse()).reverse();
        const response: number[] = [];
        for (let i = 0; i < numsMult.length; i++) {
            if(i === 0) {
                response.push(numsMultRev[i + 1])
            } else if(i === nums.length - 1) {
                response.push(numsMult[i - 1])
            } else {
                response.push(numsMultRev[i + 1] * numsMult[i - 1]);
            }
        }

        return response;
    }

    getMultArr(nums: number[]): number[] {
        let total = 1;
        const arr: number[] = Array(nums.length).fill(0);
        for (let i = 0; i < nums.length; i++) {
            total = nums[i] * total;
            arr[i] = total;
        }
        return arr;
    }
}
