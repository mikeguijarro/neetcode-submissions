class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        const sArr = [...s];
        const tArr = [...t];

        while (tArr.length !== 0) {
            console.log(sArr[0], tArr[0])
            console.log(sArr, tArr)
            if (tArr[0] === sArr[0]) {
                sArr.shift();
            }
            tArr.shift();
        }

        if(sArr.length > 0) {
            return false;
        }

        return true;
    }
}
