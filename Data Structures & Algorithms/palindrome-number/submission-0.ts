class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {
        const str = [...String(x)];
        const strReversed = [...str].reverse();
        while (str.length !== 0) {
            const str1 = str.pop();
            const str2 = strReversed.pop();

            if (str1 !== str2) {
                return false;
            }
        }
        return true;
    }
}
