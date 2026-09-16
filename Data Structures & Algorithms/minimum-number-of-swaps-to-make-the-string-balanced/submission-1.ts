class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minSwaps(s: string): number {
        
        let max = 0;
        let balance = 0;


        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if(char === '[') {
                balance--;
            } else if(char === ']') {
                balance++
            }

            max = Math.max(balance, max)
        }

        return Math.ceil(max / 2);
    }
}
