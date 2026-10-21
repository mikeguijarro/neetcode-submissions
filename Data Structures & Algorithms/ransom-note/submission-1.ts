class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        const ransomArr = [...ransomNote].sort();
        const magazineArr = [...magazine].sort();

        while (ransomArr.length !== 0) {
            if (magazineArr.length === 0) {
                return false;
            }
            const ransomVal = ransomArr[0];
            const magazineVal = magazineArr.shift();
            if (ransomVal === magazineVal) {
                ransomArr.shift();
            }
        }

        return true;
    }
}
