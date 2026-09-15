class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums: number[]): number[] {
        const freq = new Map<number, number>;

        for(const num of nums) {
            let currentFreq = freq.get(Number(num))
            if(currentFreq) {
                freq.set(Number(num), currentFreq + 1)
            } else {
                freq.set(Number(num), 1)
            }
        }
        
        return nums.slice().sort((a, b)=> {
            const freqA = freq.get(a)
            const freqB = freq.get(b)

            if(freqA < freqB) {
                return -1; 
            } else if(freqA > freqB) {
                return +1;
            } else if(a < b) {
                return +1;
            } else if(a > b) {
                return -1;
            }

            return 0
        });
    }
}
