class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let highScore: null | number = null;
        let currentScore = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 1) {
                currentScore = currentScore + 1
            } else {
                if (currentScore === 1) {
                    currentScore = 0
                    continue
                }
                if(highScore < currentScore || highScore === null) {
                    highScore = currentScore
                }
                currentScore = 0 
            }

            if(currentScore > highScore) {
                highScore = currentScore
            }
        }
        return highScore
    }
}
