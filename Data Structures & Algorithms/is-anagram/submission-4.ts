class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sArr = [...s];
        const tArr = [...t];

        sArr.sort();
        tArr.sort();

        const sStr = String(sArr);
        const tStr = String(tArr);

        if (sStr === tStr) {
            return true;
        }

        return false;
    }
}
