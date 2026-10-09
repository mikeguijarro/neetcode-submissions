class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase();
        s = s.replaceAll(/[^a-zA-Z0-9]/g, "");
        console.log(s);
        const sArr = [...s];
        const sRevArr = [...s].reverse();

        for(let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== sRevArr[i]) {
                return false;
            }
        }

        return true;
    }
}
