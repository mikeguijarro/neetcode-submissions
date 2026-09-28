class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1: number[], nums2: number[]): number[] {
        let arr = [];
        let map: Record<number, number> = {};

        for(let i = 0; i < nums2.length; i++) {
            const num = nums2[i];
            if(map[num] === undefined){
                map[num] = i;
            }
        }

        for(let i = 0; i < nums1.length; i++) {
            const num = nums1[i];
            const index = map[num];
            arr.push(index);
        }

        return arr;
    }
}
